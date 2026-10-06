// ─────────────────────────────────────────────────────────────
//  SVE PODATKE O STANU MENJATE OVDE.
//  Slike stavite u folder /slike i upišite putanje ispod
//  (npr. "slike/dnevna-soba.jpg"). Prva slika je naslovna.
// ─────────────────────────────────────────────────────────────

window.OGLAS = {
  naslov: "Trosoban stan u strogom centru",
  podnaslov: "80 m², 3. sprat, terasa i podrum — u najtraženijim B zgradama.",
  adresa: "Strogi centar · B zgrade",

  cena: 105000,
  valuta: "€",
  napomenaCena: "Cena po dogovoru. Moguća kupovina putem kredita.",

  // Kratke informacije ispod naslova
  osnovno: [
    { oznaka: "Površina", vrednost: "80 m²" },
    { oznaka: "Sobe", vrednost: "3.0" },
    { oznaka: "Sprat", vrednost: "3." },
    { oznaka: "Terasa", vrednost: "6 m²" },
    { oznaka: "Podrum", vrednost: "Da" },
    { oznaka: "Stolarija", vrednost: "Nova PVC" },
  ],

  // Svaki pasus je poseban string
  opis: [
    "Prodaje se trosoban stan površine 80 m² na trećem spratu, plus terasa od 6 m² i podrum, u strogom centru, u najtraženijim B zgradama.",
    "Stan ima novu PVC stolariju. Cena je 105.000 €, moguća je kupovina na kredit.",
  ],

  // Plan stana i kvadratura po prostorijama (m²)
  plan: {
    src: "slike/plan.webp",
    prostorije: [
      { naziv: "Dnevna soba", m2: 18.92 },
      { naziv: "Trpezarija", m2: 15.47 },
      { naziv: "Soba 2", m2: 13.15 },
      { naziv: "Soba 3", m2: 12.85 },
      { naziv: "Kuhinja", m2: 6.12 },
      { naziv: "Hodnik sa plakarom", m2: 5.88 },
      { naziv: "Kupatilo", m2: 4.62 },
      { naziv: "Ostava", m2: 1.98 },
      { naziv: "Mali WC", m2: 1.47 },
      { naziv: "Terasa", m2: 6.12, spolja: true },
    ],
  },

  karakteristike: [
    "Strogi centar",
    "B zgrade",
    "Terasa 6 m²",
    "Podrum",
    "Nova PVC stolarija",
    "Kupatilo + zaseban mali WC",
    "Ostava",
    "Moguć kredit",
  ],

  // Demo fotografije (Unsplash) — zamenite svojim: { src: "slike/01.jpg", opis: "Dnevna soba" }
  slike: [
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=80", opis: "Dnevna soba" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80", opis: "Dnevna soba – pogled ka terasi" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80", opis: "Kuhinja" },
    { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1800&q=80", opis: "Spavaća soba" },
    { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1800&q=80", opis: "Kupatilo" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=80", opis: "Trpezarija" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80", opis: "Hodnik" },
  ],

  // Tekst koji se šalje Google mapi (adresa ili koordinate "44.80,20.47").
  // Ostavite prazno ("") da se sekcija Lokacija ne prikazuje.
  mapa: "",

  kontakt: {
    ime: "",
    uloga: "",
    telefon: "+381 60 157 1107",
    email: "",
    viber: true,
    whatsapp: true,
    napomena: "",
  },
};
