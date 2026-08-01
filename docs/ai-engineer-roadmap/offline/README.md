# AI Engineer Roadmap — Offline Pack

## Open

Double-click **`index.html`** (or open in Chrome, Firefox, Edge).

No internet. No install.

## Tracking

- Checkboxes + notes saved in browser **localStorage**
- **Export progress** → JSON file → move to phone/laptop via USB or email
- **Import progress** on another device

## Files

- `index.html` — master checklist + progress bar
- `topics/*.html` — 20 lessons with prev/next links
- `assets/` — styles + tracker script

## Rebuild (maintainers)

```bash
python scripts/build-offline-roadmap.py
```
