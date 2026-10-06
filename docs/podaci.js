// ─────────────────────────────────────────────────────────────
//  SVE PODATKE O STANU MENJATE OVDE.
//  Slike stavite u folder /slike i upišite putanje ispod
//  (npr. "slike/dnevna-soba.jpg"). Prva slika je naslovna.
// ─────────────────────────────────────────────────────────────

window.OGLAS = {
  naslov: "Trosoban stan u Jagodini",
  podnaslov: "80 m², 3. sprat, terasa i podrum — Slavke Đurđević B2.",
  adresa: "Jagodina · Slavke Đurđević B2",

  cena: 105000,
  valuta: "€",
  napomenaCena: "Cena po dogovoru. Moguća kupovina putem kredita. U cenu su uračunati regal, plakari i kuhinjski elementi.",

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
    "Prodaje se trosoban stan površine 80 m² na trećem spratu, plus terasa od 6 m² i podrum, u Jagodini, Slavke Đurđević B2.",
    "Zgrada ima dva lifta i biciklanu. Stan ima novu PVC stolariju. Cena je 105.000 €, moguća je kupovina na kredit.",
    "U cenu su uračunati regal od punog drveta u dnevnoj sobi, plakari u hodniku i spavaćoj sobi, kao i kuhinjski elementi.",
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
    "Jagodina, Slavke Đurđević B2",
    "Terasa 6 m²",
    "Podrum",
    "Nova PVC stolarija",
    "Kupatilo + zaseban mali WC",
    "Ostava",
    "Dva lifta u zgradi",
    "Biciklana u zgradi",
    "Regal od punog drveta (ostaje)",
    "Plakari u hodniku i spavaćoj sobi (ostaju)",
    "Kuhinjski elementi (ostaju)",
    "Moguć kredit",
  ],

  // Fotografije: { src: "slike/ime.jpg", opis: "Opis" } — prva je naslovna
  slike: [
    { src: "slike/dnevna-soba-2.jpg", opis: "Dnevna soba" },
    { src: "slike/dnevna-soba-3.jpg", opis: "Dnevna soba – pogled ka trpezariji i kuhinji" },
    { src: "slike/dnevna-soba.jpg", opis: "Trpezarija i dnevna soba" },
    { src: "slike/kuhinja.jpg", opis: "Kuhinja" },
    { src: "slike/spavaca-soba.jpg", opis: "Spavaća soba" },
    { src: "slike/soba-plakar.jpg", opis: "Soba sa plakarom" },
    { src: "slike/soba-3.jpg", opis: "Soba" },
    { src: "slike/kupatilo.jpg", opis: "Kupatilo" },
    { src: "slike/hodnik.jpg", opis: "Hodnik sa plakarom" },
    { src: "slike/terasa.jpg", opis: "Terasa" },
  ],

  // Tekst koji se šalje Google mapi (adresa ili koordinate "44.80,20.47").
  // Ostavite prazno ("") da se sekcija Lokacija ne prikazuje.
  mapa: "Slavke Đurđević, Jagodina",

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
