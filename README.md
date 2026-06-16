# CV Generator (tailwind-cv)

[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Built_with-Vite-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Zero Runtime Deps](https://img.shields.io/badge/Dependencies-Zero_Runtime-brightgreen?style=flat-square)](#)
[![A4 PDF Ready](https://img.shields.io/badge/Export-A4_PDF-orange?style=flat-square)](#-pdf-export)
[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-cyan?style=flat-square)](https://mwaldheim.github.io/tailwind-cv/)

**An open-source, zero-dependency CV Generator powered by Tailwind CSS v4 and Vite.**

Design, edit, and export beautiful A4 PDFs — right in the browser. No accounts, no data uploads, no backend. Everything stays on your machine.

**[→ Try the Live Demo](https://mwaldheim.github.io/tailwind-cv/)**

---

## Why tailwind-cv?

Most CV builders are either locked behind subscriptions, send your data to servers, or produce ugly PDFs. tailwind-cv gives you full creative control with a real-time editor, 10+ layout styles, multiple color themes, and pixel-perfect A4 export — all in a single HTML file powered by modern web tech.

---

## Features

| | |
|---|---|
| **Tailwind CSS v4** | CSS-variable-driven theming with near-zero overhead |
| **13 Layout Styles** | From Minimal to Cyberpunk to Magazine Cover — switch instantly |
| **10 Color Themes** | Navy, Emerald, Purple, Teal, Terracotta and more |
| **5 Header Variants** | Minimal, Executive, Corporate, Split, Badge, Double-Border, Magazine, Poster |
| **In-Browser Editing** | Click any text on the CV and type — no forms needed |
| **JSON Data Layer** | Full data model export/import as JSON — your CV as structured data |
| **A4 PDF Export** | Print-optimized CSS with `@page` rules and background-graphics support |
| **Auto-Save** | Changes persist in `localStorage` between sessions |
| **Block System** | Show/hide and reorder sections: Work, Projects, Skills, OSS, Education, Certs... |
| **Zero Runtime Deps** | Vanilla JS + Tailwind compiler only — no React, no Vue, no bundler magic |

---

## Quick Start

```bash
git clone https://github.com/mwaldheim/tailwind-cv.git
cd tailwind-cv
pnpm install
pnpm dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

> Requires Node.js 18+ and pnpm. npm and yarn work too — just replace `pnpm` with your preferred package manager.

---

## Layout Styles

tailwind-cv ships with 13 distinct visual styles, selectable from the Design tab:

| Style | Description |
|---|---|
| `minimal` | Clean sans-serif, classic top-down |
| `executive` | Centered serif, formal elegance |
| `modernist` | Bold gradient name, tech-forward |
| `vintage-editorial` | Italic serif, literary magazine feel |
| `avant-garde` | Bauhaus bold, geometric structure |
| `cyberpunk` | Monospace terminal, neo-noir |
| `swiss` | Typographic modernism, tight tracking |
| `warm-editorial` | Cozy serif with soft accents |
| `terminal` | Console command-line aesthetic |
| `neumorphic` | Soft UI, tactile card shadows |
| `magazine` | Full-bleed hero, editorial drama |
| `poster` | Giant typography, Swiss poster grid |
| `brutalist` | Raw borders, stark contrast, bold |

---

## PDF Export

1. Click **PDF** in the control bar (or press `Ctrl+P` / `Cmd+P`)
2. In the browser print dialog:
   - Destination: **Save as PDF**
   - Layout: **Portrait**
   - Paper: **A4**
   - Margins: **None**
   - Background graphics: **Enabled**
   - Headers and footers: **Off**
3. Click Save

---

## JSON Data Format

All CV content is stored in a structured JSON model. Export it from the **JSON** tab or via the download button. This makes tailwind-cv composable — pipe your CV data from any source.

```json
{
  "layout": { "theme": "navy", "style": "minimal", ... },
  "personal": { "name": "...", "email": "...", ... },
  "workExperience": [ { "role": "...", "company": "...", "details": [] } ],
  "skills": { "frontend": [], "backend": [] },
  "projects": [],
  "openSource": [],
  "certifications": [],
  "education": []
}
```

---

## Roadmap

- [ ] Multi-page layout control (page-break hints)
- [ ] Photo/avatar block with circular crop
- [ ] Right-to-left language support
- [ ] Astro.js static export for GitHub Pages hosting
- [ ] Additional language packs (EN, FR, ES)

---

## Contributing

Contributions are welcome — especially new layout styles and color themes. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add your own style in ~30 lines of CSS.

---

## Part of the Waldheim Suite

tailwind-cv is published as a standalone open-source tool and is also part of the **Waldheim Suite** — a modular enterprise productivity platform built with React micro-frontends and Tailwind CSS.

---

## License

[MIT](LICENSE) — free to use, modify, and redistribute.
