# HeritageConnect — Changes in this version

## Based on the supplied HeritageConnect build guide
The original guide describes:
Home → Heritage Sites → Select a Monument → History + Photos + Audio → Quiz → Points → Report Damage,
plus a map with site markers and QR codes. The React project keeps that flow and expands the map/state behavior.

## Changes from the previous React version

1. QR code improved
   - Every monument has its own QR code.
   - QR opens `/site/<site-id>`.
   - The opened page shows the monument's location, history, facts, audio narration, quiz link and state-map link.
   - A Copy Monument Link button is included.
   - A note explains that a public hosted URL is required for scanning from another phone.

2. State-wise map improved
   - Uttar Pradesh (UP): Site A / Prayagraj monuments.
   - Madhya Pradesh (MP): Site B monuments.
   - Rajasthan (RJ): Site C monuments.
   - Bihar (BR): Site D monuments.
   - Each state has a separate route: `/map/up`, `/map/mp`, `/map/rajasthan`, `/map/bihar`.
   - All-state map is also available at `/map`.

3. Map pin flow improved
   - Every monument has a real latitude/longitude in the demo data.
   - Click a pin to open a popup.
   - Popup shows monument name, city and location.
   - "View Full Details" opens the exact monument page.

4. Monument page improved
   - Added coordinates.
   - Added state-aware Back to Map link.
   - Added Open State Map button.
   - Audio narration includes history and facts.
   - QR panel explains exactly what scanning does.

5. Documentation
   - Added `docs/CHANGES.md`.
   - Added/updated README instructions.

## Existing features retained
- React + Vite
- Explore page
- State filtering
- Quiz and localStorage points
- Damage report and localStorage
- Optional backend starter
- Responsive layout
