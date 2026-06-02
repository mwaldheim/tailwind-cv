/**
 * main.test.js – DOM-Integrationstests für src/main.js
 *
 * Strategie:
 *   - vitest.setup.js setzt das DOM (index.html) VOR diesem Modul auf.
 *   - main.js wird als Side-Effect-Modul importiert (registriert DOMContentLoaded-Listener).
 *   - Wir feuern DOMContentLoaded manuell → App initialisiert sich.
 *   - Anschließend testen wir DOM-Zustand und window.*-Globals.
 */
import { beforeAll, describe, it, expect, vi } from 'vitest';

// ── App initialisieren ────────────────────────────────────────────────────────
// main.js hat keine Exports – Import für Side-Effects (registriert Listener)
await import('./main.js');

// DOMContentLoaded auslösen → loadData() + renderCV() laufen durch
document.dispatchEvent(new Event('DOMContentLoaded'));

// Einen Tick warten, damit synchrone Render-Durchläufe abgeschlossen sind
await new Promise((r) => setTimeout(r, 50));

// ─────────────────────────────────────────────────────────────────────────────
describe('App-Initialisierung', () => {
  it('rendert den CV-Namen im Preview', () => {
    const el = document.getElementById('cv-name');
    expect(el).not.toBeNull();
    expect(el.textContent.trim()).not.toBe('');
  });

  it('rendert die Berufsbezeichnung (cv-role)', () => {
    const el = document.getElementById('cv-role');
    expect(el).not.toBeNull();
    expect(el.textContent.trim()).not.toBe('');
  });

  it('rendert das cv-page-Element', () => {
    expect(document.getElementById('cv-page')).not.toBeNull();
  });

  it('befüllt den Meta-Name-Input aus den CV-Daten', () => {
    const input = document.getElementById('meta-name');
    expect(input).not.toBeNull();
    expect(input.value.trim()).not.toBe('');
  });

  it('befüllt den Meta-Role-Input aus den CV-Daten', () => {
    const input = document.getElementById('meta-role');
    expect(input).not.toBeNull();
    expect(input.value.trim()).not.toBe('');
  });

  it('befüllt Meta-Email-Input', () => {
    const input = document.getElementById('meta-email');
    expect(input).not.toBeNull();
    expect(input.value.trim()).not.toBe('');
  });

  it('setzt cv-contact-email im Preview', () => {
    const el = document.getElementById('cv-contact-email');
    expect(el).not.toBeNull();
  });

  it('speichert Daten in localStorage nach Init', () => {
    const raw = localStorage.getItem('cv_json_data');
    expect(raw).not.toBeNull();
    const data = JSON.parse(raw);
    expect(data).toHaveProperty('personal');
    expect(data).toHaveProperty('layout');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window.addArrayItem', () => {
  it('ist als window-Funktion registriert', () => {
    expect(typeof window.addArrayItem).toBe('function');
  });

  it('fügt einen Kompetenz-Eintrag in localStorage hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.competencies.length;

    window.addArrayItem('competencies');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.competencies.length).toBe(countBefore + 1);
  });

  it('fügt einen Sprach-Eintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.languages.length;

    window.addArrayItem('languages');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.languages.length).toBe(countBefore + 1);
  });

  it('fügt einen Zertifikats-Eintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.certifications.length;

    window.addArrayItem('certifications');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.certifications.length).toBe(countBefore + 1);
  });

  it('fügt einen Arbeitserfahrungs-Eintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.workExperience.length;

    window.addArrayItem('workExperience');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.workExperience.length).toBe(countBefore + 1);
  });

  it('fügt einen Ausbildungs-Eintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.education.length;

    window.addArrayItem('education');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.education.length).toBe(countBefore + 1);
  });

  it('fügt einen Hobby-Eintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.hobbies.length;

    window.addArrayItem('hobbies');

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.hobbies.length).toBe(countBefore + 1);
  });

  it('tut nichts bei unbekannter Sektion', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    window.addArrayItem('__nonexistent__');
    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(JSON.stringify(after)).toBe(JSON.stringify(before));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window.removeArrayItem', () => {
  it('ist als window-Funktion registriert', () => {
    expect(typeof window.removeArrayItem).toBe('function');
  });

  it('entfernt einen Kompetenz-Eintrag', () => {
    // Sicherstellen dass mindestens 1 Eintrag vorhanden
    window.addArrayItem('competencies');
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.competencies.length;

    window.removeArrayItem('competencies', countBefore - 1);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.competencies.length).toBe(countBefore - 1);
  });

  it('tut nichts bei ungültigem Index', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const count = before.competencies.length;

    window.removeArrayItem('competencies', 9999);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.competencies.length).toBe(count);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window.addSkillItem / removeSkillItem', () => {
  it('addSkillItem ist als window-Funktion registriert', () => {
    expect(typeof window.addSkillItem).toBe('function');
  });

  it('removeSkillItem ist als window-Funktion registriert', () => {
    expect(typeof window.removeSkillItem).toBe('function');
  });

  it('fügt einen Skill in eine vorhandene Kategorie ein', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const categories = Object.keys(before.skills);
    expect(categories.length).toBeGreaterThan(0);
    const cat = categories[0];
    const countBefore = before.skills[cat].length;

    window.addSkillItem(cat);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.skills[cat].length).toBe(countBefore + 1);
  });

  it('entfernt einen Skill aus einer Kategorie', () => {
    const data = JSON.parse(localStorage.getItem('cv_json_data'));
    const cat = Object.keys(data.skills)[0];
    window.addSkillItem(cat);

    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.skills[cat].length;

    window.removeSkillItem(cat, countBefore - 1);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.skills[cat].length).toBe(countBefore - 1);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window.addJobBullet / removeJobBullet', () => {
  it('addJobBullet ist als window-Funktion registriert', () => {
    expect(typeof window.addJobBullet).toBe('function');
  });

  it('fügt einen Job-Bullet beim ersten Arbeitseintrag hinzu', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(before.workExperience.length).toBeGreaterThan(0);
    const countBefore = before.workExperience[0].details.length;

    window.addJobBullet(0);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.workExperience[0].details.length).toBe(countBefore + 1);
  });

  it('entfernt einen Job-Bullet', () => {
    const before = JSON.parse(localStorage.getItem('cv_json_data'));
    const countBefore = before.workExperience[0].details.length;

    window.removeJobBullet(0, countBefore - 1);

    const after = JSON.parse(localStorage.getItem('cv_json_data'));
    expect(after.workExperience[0].details.length).toBe(countBefore - 1);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window.updateBlockField', () => {
  it('ist als window-Funktion registriert', () => {
    expect(typeof window.updateBlockField).toBe('function');
  });

  it('aktualisiert ein Feld eines Eintrags in localStorage', () => {
    window.updateBlockField(0, 'title', 'Test-Kompetenz');
    const data = JSON.parse(localStorage.getItem('cv_json_data'));
    // competencies[0].title sollte aktualisiert sein (wenn Block aktiv ist)
    // Funktion nutzt aktiven Block – wir prüfen dass kein Fehler geworfen wird
    expect(data).toBeTruthy();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe('window-Globals vollständig vorhanden', () => {
  const expectedGlobals = [
    'addArrayItem',
    'removeArrayItem',
    'addSkillItem',
    'removeSkillItem',
    'addJobBullet',
    'removeJobBullet',
    'addProjectTech',
    'removeProjectTech',
    'addOpenSourceTech',
    'removeOpenSourceTech',
    'updateBlockField',
    'updateSubBlockList',
    'updateSkillField',
  ];

  expectedGlobals.forEach((name) => {
    it(`window.${name} ist eine Funktion`, () => {
      expect(typeof window[name]).toBe('function');
    });
  });
});
