# Prodaja stana

Jednostavan sajt-oglas za jedan stan. Bez build koraka i bez zavisnosti.
Sajt je u folderu `docs/`.

- Cloudflare: https://trosoban-stan-na-prodaju.prodaja-stana.workers.dev
- GitHub Pages: https://veljkobrame.github.io/prodaja-stana/

## Personalizacija

1. Fotografije stavite u `docs/slike/`.
2. U `docs/podaci.js` upišite naslov, cenu, opis, karakteristike, putanje do slika i kontakt.
   Prva slika u listi je naslovna.

## Pregled lokalno

Otvorite `docs/index.html` u browseru.

## Objavljivanje

- GitHub Pages: `git push` (objavljuje se folder `docs/` sa grane `main`).
- Cloudflare: `npx wrangler deploy` (objavljuje se samo `docs/`, vidi `wrangler.jsonc`).
