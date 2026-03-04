# Pegasus Materials — Website

Static marketing website for [Pegasus Materials](https://pegasus-materials.com) — bio-based specialty materials for electronics, aerospace, and advanced manufacturing.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, pillars, products overview, contact |
| `about.html` | Company story, market focus, process, partners |
| `team.html` | Founders & leadership, advisors |
| `virella-001.html` | Product page — Virella-001 (Specialty Polyamide for Connectors) |
| `virella-002.html` | Product page — Virella-002 (High-Performance Polyimide for 3D Printing) |
| `media.html` | Press & media |

## Structure

```
├── index.html
├── about.html
├── team.html
├── virella-001.html
├── virella-002.html
├── media.html
├── styles.css
├── scripts.js
└── assets/
    ├── images/       # Logos, team photos
    ├── video/        # Hero background video
    └── docs/         # Downloadable spec sheets
```

## Running locally

```bash
python -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000).

## Tech

- Vanilla HTML / CSS / JavaScript (no framework)
- Google Fonts: Barlow Semi Condensed + Inter
- Chart.js v4.4.0 (radar/spider charts)
- Scroll-reveal animations via IntersectionObserver
