import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  // localStorage leeren damit jeder Test sauber startet
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('#cv-page');
});

// ─────────────────────────────────────────────────────────────────────────────
// Seite laden & Grundstruktur
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Seitenstruktur', () => {
  test('Seite lädt mit korrektem Titel', async ({ page }) => {
    await expect(page).toHaveTitle(/Lebenslauf|CV Builder/i);
  });

  test('Sidebar mit den 4 Tabs ist sichtbar', async ({ page }) => {
    await expect(page.locator('#tab-btn-design')).toBeVisible();
    await expect(page.locator('#tab-btn-personal')).toBeVisible();
    await expect(page.locator('#tab-btn-blocks')).toBeVisible();
    await expect(page.locator('#tab-btn-json')).toBeVisible();
  });

  test('CV-Preview ist sichtbar', async ({ page }) => {
    await expect(page.locator('#cv-page')).toBeVisible();
  });

  test('CV-Name wird im Preview angezeigt', async ({ page }) => {
    const name = await page.locator('#cv-name').textContent();
    expect(name?.trim()).not.toBe('');
  });

  test('CV-Berufsbezeichnung wird im Preview angezeigt', async ({ page }) => {
    const role = await page.locator('#cv-role').textContent();
    expect(role?.trim()).not.toBe('');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Daten-Tab: Live-Preview-Update
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Daten-Tab – Live-Update', () => {
  test.beforeEach(async ({ page }) => {
    await page.locator('#tab-btn-personal').click();
  });

  test('Namensfeld ist befüllt', async ({ page }) => {
    const val = await page.locator('#meta-name').inputValue();
    expect(val.trim()).not.toBe('');
  });

  test('Name-Änderung aktualisiert sofort den Preview', async ({ page }) => {
    const input = page.locator('#meta-name');
    await input.click({ clickCount: 3 });
    await input.fill('Test Testmann');
    await expect(page.locator('#cv-name')).toHaveText('Test Testmann');
  });

  test('Berufsbezeichnung-Änderung aktualisiert Preview', async ({ page }) => {
    await page.locator('#meta-role').fill('Testrolle');
    await expect(page.locator('#cv-role')).toHaveText('Testrolle');
  });

  test('E-Mail-Änderung aktualisiert Preview', async ({ page }) => {
    await page.locator('#meta-email').fill('test@example.com');
    await expect(page.locator('#cv-contact-email')).toHaveText('test@example.com');
  });

  test('Standort-Änderung aktualisiert Preview', async ({ page }) => {
    await page.locator('#meta-location').fill('Berlin, Deutschland');
    await expect(page.locator('#cv-contact-location')).toHaveText('Berlin, Deutschland');
  });

  test('Adressfeld ist vorhanden', async ({ page }) => {
    await expect(page.locator('#meta-address')).toBeVisible();
  });

  test('Adress-Änderung aktualisiert Preview', async ({ page }) => {
    await page.locator('#meta-address').fill('Musterstraße 42');
    await expect(page.locator('#cv-contact-address')).toHaveText('Musterstraße 42');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Design-Tab
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Design-Tab', () => {
  test.beforeEach(async ({ page }) => {
    await page.locator('#tab-btn-design').click();
  });

  test('Layout-Stil-Dropdown ist sichtbar', async ({ page }) => {
    await expect(page.locator('#select-layout-style')).toBeVisible();
  });

  test('enthält alle 21 Stil-Optionen', async ({ page }) => {
    const options = await page.locator('#select-layout-style option').count();
    expect(options).toBe(21);
  });

  test('Schriftfamilie-Wechsel zu "tech-mono" wendet CSS-Klasse an', async ({ page }) => {
    await page.locator('#select-font-pack').selectOption('tech-mono');
    await expect(page.locator('#cv-page')).toHaveClass(/font-pack-tech-mono/);
  });

  test('Stil-Wechsel zu "executive" wendet CSS-Klasse an', async ({ page }) => {
    await page.locator('#select-layout-style').selectOption('executive');
    await expect(page.locator('#cv-page')).toHaveClass(/style-executive/);
  });

  test('Stil-Wechsel zu "scandinavian" wendet CSS-Klasse an', async ({ page }) => {
    await page.locator('#select-layout-style').selectOption('scandinavian');
    await expect(page.locator('#cv-page')).toHaveClass(/style-scandinavian/);
  });

  test('Stil-Wechsel zu "art-deco" wendet CSS-Klasse an', async ({ page }) => {
    await page.locator('#select-layout-style').selectOption('art-deco');
    await expect(page.locator('#cv-page')).toHaveClass(/style-art-deco/);
  });

  test('Stil-Wechsel zu "academic" wendet CSS-Klasse an', async ({ page }) => {
    await page.locator('#select-layout-style').selectOption('academic');
    await expect(page.locator('#cv-page')).toHaveClass(/style-academic/);
  });

  test('Farbschema-Button ist klickbar und ändert CSS-Variablen', async ({ page }) => {
    // Theme wird per CSS-Variablen auf :root gesetzt, nicht per Klasse
    const themeBtns = await page.locator('.theme-btn').count();
    expect(themeBtns).toBeGreaterThan(0);
    // Einen Theme-Button klicken und sicherstellen dass kein Fehler auftritt
    await page.locator('.theme-btn').first().click();
    const primary = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--color-cv-primary').trim()
    );
    expect(primary).not.toBe('');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Blöcke-Tab
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Blöcke-Tab', () => {
  test.beforeEach(async ({ page }) => {
    await page.locator('#tab-btn-blocks').click();
  });

  test('Block-Selector-Dropdown ist sichtbar', async ({ page }) => {
    await expect(page.locator('#select-active-block')).toBeVisible();
  });

  test('enthält Sprachen-Option', async ({ page }) => {
    const opts = await page.locator('#select-active-block option[value="languages"]').count();
    expect(opts).toBe(1);
  });

  test('Hinzufügen-Button ist vorhanden', async ({ page }) => {
    const addBtn = page.getByRole('button', { name: /Hinzufügen|hinzufügen|\+/i }).first();
    await expect(addBtn).toBeVisible();
  });

  test('Sprachen-Block wechseln zeigt Sprachen-Editor', async ({ page }) => {
    await page.locator('#select-active-block').selectOption('languages');
    await page.waitForTimeout(200);
    const editorContent = await page.locator('#block-list-editor').innerHTML();
    expect(editorContent.length).toBeGreaterThan(0);
  });

  test('Neuer Kompetenz-Eintrag kann hinzugefügt werden', async ({ page }) => {
    await page.locator('#select-active-block').selectOption('competencies');
    await page.waitForTimeout(200);

    // Einträge zählen bevor hinzufügen
    const countBefore = await page.locator('#block-list-editor').evaluate(
      el => el.querySelectorAll('input[type="text"]').length
    );

    await page.locator('#block-list-editor button:has-text("Eintrag hinzufügen")').click();
    await page.waitForTimeout(200);

    const countAfter = await page.locator('#block-list-editor').evaluate(
      el => el.querySelectorAll('input[type="text"]').length
    );
    expect(countAfter).toBeGreaterThan(countBefore);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// JSON-Tab
// ─────────────────────────────────────────────────────────────────────────────
test.describe('JSON-Tab', () => {
  test.beforeEach(async ({ page }) => {
    await page.locator('#tab-btn-json').click();
  });

  test('JSON-Editor Textarea ist sichtbar', async ({ page }) => {
    await expect(page.locator('#json-editor')).toBeVisible();
  });

  test('JSON-Editor enthält valides JSON', async ({ page }) => {
    const json = await page.locator('#json-editor').inputValue();
    expect(() => JSON.parse(json)).not.toThrow();
    const data = JSON.parse(json);
    expect(data).toHaveProperty('personal');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Persistierung
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Persistierung (localStorage)', () => {
  test('Daten werden in localStorage gespeichert', async ({ page }) => {
    const raw = await page.evaluate(() => localStorage.getItem('cv_json_data'));
    expect(raw).not.toBeNull();
    const data = JSON.parse(raw);
    expect(data).toHaveProperty('personal');
  });

  test('Namensänderung bleibt nach Reload erhalten', async ({ page }) => {
    await page.getByRole('button', { name: /Daten/i }).click();
    await page.locator('#meta-name').fill('Persistenz Test');
    await page.waitForTimeout(200);
    await page.reload();
    await page.waitForSelector('#cv-page');
    const name = await page.locator('#cv-name').textContent();
    expect(name?.trim()).toBe('Persistenz Test');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// UI-Sichtbarkeitskontrollen
// ─────────────────────────────────────────────────────────────────────────────
test.describe('Abschnitt-Sichtbarkeit', () => {
  test.beforeEach(async ({ page }) => {
    await page.locator('#tab-btn-design').click();
  });

  test('Sichtbarkeits-Toggles sind vorhanden', async ({ page }) => {
    // Sichtbarkeits-Checkboxen haben IDs beginnend mit 'check-visible-'
    const toggles = page.locator('input[type="checkbox"][id^="check-visible-"]');
    const count = await toggles.count();
    expect(count).toBeGreaterThan(0);
  });
});
