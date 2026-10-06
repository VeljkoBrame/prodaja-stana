(function () {
  const d = window.OGLAS;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => n.toLocaleString("sr-RS").replace(/,/g, ".");
  const cena = `${fmt(d.cena)} ${d.valuta}`;

  // Tekst
  document.title = `${d.naslov} — ${cena}`;
  $("naslov").textContent = d.naslov;
  $("podnaslov").textContent = d.podnaslov;
  $("adresa").textContent = d.adresa;
  $("footAdresa").textContent = `${d.naslov} · ${d.adresa}`;
  $("cena").textContent = cena;
  $("barCena").textContent = cena;
  $("napomenaCena").textContent = d.napomenaCena || "";

  const m2 = parseFloat((d.osnovno.find((o) => /povr/i.test(o.oznaka)) || {}).vrednost);
  if (m2) $("cenaM2").textContent = `${fmt(Math.round(d.cena / m2))} ${d.valuta}/m²`;

  $("osnovno").innerHTML = d.osnovno
    .map((o) => `<div><dt>${esc(o.oznaka)}</dt><dd>${esc(o.vrednost)}</dd></div>`)
    .join("");
  $("opis").innerHTML = d.opis.map((p) => `<p>${esc(p)}</p>`).join("");
  $("karakteristike").innerHTML = d.karakteristike.map((k) => `<li>${esc(k)}</li>`).join("");
  $("mapa").src = `https://www.google.com/maps?q=${encodeURIComponent(d.mapa)}&z=15&output=embed`;

  // Kontakt
  const k = d.kontakt;
  const tel = k.telefon.replace(/[^\d+]/g, "");
  const telDigits = tel.replace("+", "");
  $("kontaktIme").textContent = k.ime;
  $("kontaktUloga").textContent = k.uloga || "";
  $("kontaktNapomena").textContent = k.napomena || "";
  $("barCall").href = `tel:${tel}`;

  const poruke = [];
  if (k.viber) poruke.push(`<a class="btn" href="viber://chat?number=%2B${telDigits}">Viber</a>`);
  if (k.whatsapp) poruke.push(`<a class="btn" href="https://wa.me/${telDigits}" target="_blank" rel="noopener">WhatsApp</a>`);
  $("akcije").innerHTML =
    `<a class="btn btn--primary" href="tel:${tel}">Pozovi ${esc(k.telefon)}</a>` +
    (poruke.length ? `<div class="btn__row">${poruke.join("")}</div>` : "") +
    (k.email
      ? `<a class="btn" href="mailto:${esc(k.email)}?subject=${encodeURIComponent("Upit: " + d.naslov)}">Pošalji email</a>`
      : "");

  // Fotografije
  const slike = d.slike;
  const thumb = (s, i) =>
    `<button data-i="${i}" aria-label="Otvori fotografiju: ${esc(s.opis || i + 1)}"><img src="${esc(s.src)}" alt="${esc(s.opis || "")}" loading="${i < 5 ? "eager" : "lazy"}"></button>`;
  $("mosaic").innerHTML =
    slike.slice(0, 5).map(thumb).join("") +
    (slike.length > 1 ? `<button class="mosaic__all" data-i="0">Sve fotografije (${slike.length})</button>` : "");
  $("galerija").innerHTML = slike.map(thumb).join("");

  // Lightbox
  const lb = $("lb");
  let cur = 0;
  let lastFocus = null;

  function show(i) {
    cur = (i + slike.length) % slike.length;
    $("lbImg").src = slike[cur].src;
    $("lbImg").alt = slike[cur].opis || "";
    $("lbCap").textContent = slike[cur].opis || "";
    $("lbCount").textContent = `${cur + 1} / ${slike.length}`;
    new Image().src = slike[(cur + 1) % slike.length].src; // preload sledeće
  }
  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("lbClose").focus();
  }
  function close() {
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (b) open(+b.dataset.i);
  });
  $("lbClose").onclick = close;
  $("lbPrev").onclick = () => show(cur - 1);
  $("lbNext").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });

  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
