# Apex Desk Checklist (pilot)

Live at: `https://acsstandardhub.github.io/ApexTrainingHub/desk/`

Frontline desk checklist for Apex concierge agents. Open → On Shift → Close, plus a Quick Reference tab. Linked from Training Hub → M2 Materials Library.

## Change the checklist
Edit **`checklist.js`** only. Sites, shifts, checklist items, every-time standards, the daily tips and the Training Hub links all live there.

- Each item needs a unique `id`. Don't reuse an old id for a new item.
- `ref` links an item to a hub page, e.g. `sop-library.html#packages`.
- After any edit, change `VERSION` in **`sw.js`** (e.g. `apex-desk-v1.1`) so installed phones refresh.

## Where data lives
On the device that's using it (browser storage). Nothing is sent anywhere.
- Current shift, settings and past shifts: per device.
- Fridge board: per device **and per site**, so the next agent on the same desk device sees it.
- Close tab → Export history (CSV) pulls past shifts off a device.

## Install on a phone
- iPhone: open the link in Safari → Share → Add to Home Screen.
- Android: open in Chrome → ⋮ → Add to Home screen / Install app.
Works offline after the first visit.
