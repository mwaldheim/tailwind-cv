import { readFileSync } from 'fs';
import { resolve } from 'path';
import { vi } from 'vitest';

// ── DOM: vollständiges HTML aus index.html laden ─────────────────────────────
const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
// Inline <script>-Tags entfernen, damit jsdom sie nicht selbst ausführt
const strippedHtml = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
document.documentElement.innerHTML = strippedHtml;

// ── window.matchMedia – in jsdom nicht verfügbar ─────────────────────────────
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// ── URL.createObjectURL / revokeObjectURL (Datei-Export) ─────────────────────
global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
global.URL.revokeObjectURL = vi.fn();

// ── window.print() – kein echter Browser nötig ───────────────────────────────
window.print = vi.fn();
