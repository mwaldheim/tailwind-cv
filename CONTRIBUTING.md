# Contributing to tailwind-cv

Thank you for your interest in contributing! This project is intentionally kept simple and dependency-free — contributions should keep that spirit alive.

## Getting Started

```bash
git clone https://github.com/mwaldheim/tailwind-cv.git
cd tailwind-cv
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## What We Accept

**Great contributions:**
- New layout/style themes (see `src/style.css` — `.style-*` classes)
- New header layout variants (`.header-layout-*` classes)
- New color themes (the `themes` object in `src/main.js`)
- Bug fixes and print/PDF improvements
- New CV section types
- i18n / language support improvements

**Out of scope:**
- Adding a backend or server-side rendering
- Replacing the vanilla JS with a framework
- Adding npm packages that increase bundle size significantly

## Adding a New Design Style

1. Add a new `<option>` to the `#select-layout-style` dropdown in `index.html`
2. Add a `.style-yourname { ... }` block to `src/style.css`
3. Register the class in the `renderCV()` cleanup list in `src/main.js`
4. Add print-margin overrides via `applyStyleSpecificPrintMargins()` if needed

A style should minimally define: `h2`, `h3`, `h4`, `.timeline-dot`, and any container overrides.

## Adding a New Color Theme

In `src/main.js`, add an entry to the `themes` object:

```js
mytheme: {
  primary: '#...',
  secondary: '#...',
  accent: '#...',
  accentLight: '#...',
  bg: '#...',
  line: '#...'
}
```

## Submitting a Pull Request

- Keep changes focused — one feature per PR
- Test both screen view and PDF export (Ctrl+P → Save as PDF)
- Make sure the demo data ("Alexander Neumann") still looks good in your style
- No new runtime dependencies

## Reporting Bugs

Open an issue and include:
- Browser + version
- Steps to reproduce
- Screenshot of the broken output
