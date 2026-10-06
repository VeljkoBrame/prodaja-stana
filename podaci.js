// ─────────────────────────────────────────────────────────────
//  SVE PODATKE O STANU MENJATE OVDE.
//  Slike stavite u folder /slike i upišite putanje ispod
//  (npr. "slike/dnevna-soba.jpg"). Prva slika je naslovna.
// ─────────────────────────────────────────────────────────────

window.OGLAS = {
  naslov: "Svetao trosoban stan na Vračaru",
  podnaslov: "Mirna ulica, pet minuta od Hrama, potpuno renoviran 2024.",
  adresa: "Njegoševa, Vračar, Beograd",

  cena: 285000,
  valuta: "€",
  napomenaCena: "Cena je fiksna. Moguća kupovina putem kredita.",

  // Kratke informacije ispod naslova
  osnovno: [
    { oznaka: "Površina", vrednost: "78 m²" },
    { oznaka: "Sobe", vrednost: "3.0" },
    { oznaka: "Sprat", vrednost: "3 / 5" },
    { oznaka: "Izgradnja", vrednost: "1962." },
    { oznaka: "Grejanje", vrednost: "Centralno" },
    { oznaka: "Uknjižen", vrednost: "Da" },
  ],

  // Svaki pasus je poseban string
  opis: [
    "Stan se nalazi na trećem spratu održavane zgrade sa liftom, u jednoj od najmirnijih ulica Vračara. Orijentisan je na istok i zapad, pa je svetao tokom celog dana.",
    "Raspored: ulazni hodnik, prostrana dnevna soba sa izlazom na terasu, odvojena kuhinja sa trpezarijom, dve spavaće sobe, kupatilo i zaseban toalet. Sve sobe su odvojene.",
    "Renoviranje 2024. je obuhvatilo instalacije (struja i vodovod), PVC stolariju, hrastov parket, kupatilo i kuhinju po meri. Stan je spreman za useljenje.",
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
    "Terasa 6 m²",
    "Lift",
    "Podrum 4 m²",
    "PVC stolarija",
    "Klima u svakoj sobi",
    "Interfon",
    "Kablovska i optika",
    "Blizu javnog prevoza",
    "Škola i vrtić u blizini",
    "Parking na ulici (zona)",
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

  // Tekst koji se šalje Google mapi (adresa ili koordinate "44.80,20.47")
  mapa: "Njegoševa, Vračar, Beograd",

  kontakt: {
    ime: "Marko Petrović",
    uloga: "Vlasnik — bez agencijske provizije",
    telefon: "+381 60 000 0000",
    email: "stan.vracar@example.com",
    viber: true,
    whatsapp: true,
    napomena: "Razgledanje svakog dana od 17 do 20h, uz prethodni dogovor.",
  },
};
