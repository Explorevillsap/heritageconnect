# HeritageConnect — React + Vite

A React/Vite prototype based on the supplied HeritageConnect build guide.

## Main features
- Home page
- 4 state sections:
  - Uttar Pradesh (UP) — Site A / Prayagraj
  - Madhya Pradesh (MP) — Site B
  - Rajasthan (RJ) — Site C
  - Bihar (BR) — Site D
- All-state interactive map
- Separate map for every state
- Clickable 📍 monument pins
- Pin popup → Full Monument Details
- Monument history + facts
- Browser text-to-speech audio
- Per-monument QR code
- Quiz + Heritage Points using localStorage
- Damage Report using localStorage
- Optional Express backend starter

## Run
```bash
npm install
npm run dev
```

Then open the Vite localhost address.

## QR code
Every monument QR points to its exact route:
`/site/site-id`

For a phone to scan a QR and open the page, the React site must be hosted on a URL reachable by that phone. A `localhost` QR is only useful on the same device.

## Maps
Open:
- `/map` — all states
- `/map/up` — Uttar Pradesh
- `/map/mp` — Madhya Pradesh
- `/map/rajasthan` — Rajasthan
- `/map/bihar` — Bihar

Map tiles use OpenStreetMap, so internet is needed for the map.

## Backend
The demo works without the backend using localStorage.
An optional Express starter is inside `backend/`.
