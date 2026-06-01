# 📄 Premium Interaktiver Lebenslauf / CV Builder

Ein moderner, professioneller und hochgradig anpassbarer Lebenslauf-Builder, der mit **HTML5**, **CSS3**, **Tailwind CSS v4** und **Vite** erstellt wurde. Er ist speziell für den A4-Ausdruck optimiert und ermöglicht es, den Lebenslauf direkt im Webbrowser visuell anzupassen und abzuspeichern.

## ✨ Features

- **Tailwind CSS v4**: Nutzt das brandneue Tailwind CSS v4 Framework für moderne Stile und flexible Theme-Definitionen über CSS-Variablen.
- **DINA4 optimiert**: Durchdachtes 2-Seiten-Layout mit CSS-Print-Overrides. Keine abgeschnittenen Elemente oder Layout-Verschiebungen beim PDF-Export.
- **Interaktiver Editor**: Sämtliche Texte im Lebenslauf sind direkt per Klick im Browser editierbar (`contenteditable="true"`).
- **Auto-Save & Cache**: Änderungen werden automatisch lokal im Browser-Speicher (`localStorage`) gesichert, damit nichts verloren geht.
- **Multi-Theme Unterstützung**: Bietet vier vordefinierte, professionelle Farbpaletten ("Classic Navy", "Emerald Forest", "Deep Purple", "Charcoal Minimal"), die mit einem Klick gewechselt werden können.
- **PDF-Export**: Direkter Export über den nativen Druckdialog (`window.print()`) des Browsers, bereinigt um alle Bedienelemente.

---

## 🚀 Schnelleinrichtung & Start

Folge diesen Schritten, um den CV-Builder lokal auszuführen:

### 1. Repository / Ordner betreten
Öffne ein Terminal in diesem Projektordner:
```bash
cd dev/tailwind-cv
```

### 2. Entwicklungsserver starten
Der lokale Server wird gestartet und bietet Live-Reload:
```bash
pnpm run dev
```

### 3. Im Browser öffnen
Öffne die folgende Adresse in deinem Browser:
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

## 🛠️ Anpassung & Nutzung

### 📝 Text bearbeiten
1. Stelle sicher, dass der **Bearbeitungsmodus: EIN** oben in der Leiste aktiv ist.
2. Klicke auf ein beliebiges Textelement (z.B. Name, Berufsbezeichnung, Stichpunkte der Berufserfahrung oder Technologien).
3. Tippe einfach deinen Text ein. Er wird im Hintergrund sofort per **Auto-Save** gesichert.

### 🎨 Farbtheme ändern
Klicke oben auf die runden Farbkreise in der Steuerungsleiste, um das Design augenblicklich zu wechseln:
- 🔵 **Classic Navy** (Standard: Professionelles Dunkelblau &amp; Slate)
- 🟢 **Emerald Forest** (Modernes Dunkelgrün &amp; Mint)
- 🟣 **Deep Purple** (Kreatives Violett &amp; Indigo)
- ⚫ **Charcoal Minimal** (Elegantes Anthrazit &amp; Indigo)

### 💾 Daten zurücksetzen
Wenn du von vorne anfangen möchtest, klicke einfach auf **Reset** in der Steuerungsleiste. Dadurch werden deine Browser-Caches gelöscht und die Standard-Demodaten wiederhergestellt.

---

## 🖨️ PDF Export Anleitung

Um deinen Lebenslauf als fehlerfreies PDF zu exportieren, befolge diese Schritte im Browser:

1. Klicke in der Steuerungsleiste oben auf den Button **"PDF Exportieren"** (oder drücke `Strg + P` / `Cmd + P`).
2. Konfiguriere im sich öffnenden Druckdialog deines Browsers folgende Einstellungen:
   - **Ziel**: *Als PDF speichern* oder *Save as PDF*.
   - **Seiten**: *Alle* (1 &amp; 2).
   - **Layout**: *Hochformat* / *Portrait*.
   - **Papierformat**: *A4*.
   - **Ränder**: *Keine* oder *Minimal* (Empfohlen: **Keine / None**, da die Ränder bereits perfekt im CSS-Layout definiert sind).
   - **Optionen**: Aktiviere unbedingt **Hintergrundgrafiken / Background graphics** (damit die farbigen Hintergründe und Fortschrittsbalken im PDF sichtbar sind).
   - Deaktiviere *Kopf- und Fußzeilen* (Headers and footers), damit keine Browser-URLs auf dem Ausdruck erscheinen.
3. Klicke auf **Speichern** und wähle deinen Speicherort.

---

## 📂 Dateistruktur

- `index.html` — Die CV-Struktur mit allen editierbaren Elementen (`data-cv-key`).
- `vite.config.js` — Konfiguration für Vite und Tailwind Compiler.
- `pnpm-workspace.yaml` — Whitelist für erlaubte Dependency-Builds (`esbuild`).
- `src/`
  - `style.css` — Tailwind v4 `@import`, Theme-Variablen und dedizierte `@media print`-Regeln.
  - `main.js` — Event-Handling für Editiermodus, `localStorage`-Sicherung und Theme-Wechsel.
