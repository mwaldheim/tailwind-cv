/**
 * CV Helper Utilities – pure functions, fully testable without DOM or localStorage.
 */

/**
 * Read a value from a nested object using a dot-separated path.
 * Returns undefined if any intermediate key is missing.
 * @param {object} obj
 * @param {string} path – e.g. "personal.name"
 * @returns {*}
 */
export function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Write a value into a nested object using a dot-separated path.
 * Silently skips if an intermediate key does not exist.
 * @param {object} obj
 * @param {string} path – e.g. "personal.name"
 * @param {*} value
 */
export function setValueByPath(obj, path, value) {
  const parts = path.split('.');
  const lastPart = parts.pop();
  const target = parts.reduce((acc, part) => acc && acc[part], obj);
  if (target !== undefined && target !== null) {
    target[lastPart] = value;
  }
}

/**
 * Clamp a numeric percentage value to the range [0, 100].
 * @param {number} value
 * @returns {number}
 */
export function clampPercentage(value) {
  return Math.max(0, Math.min(100, Number(value) || 0));
}

/**
 * Extract up to 3 uppercase initials from a full name.
 * Returns "CV" if the name is empty or falsy.
 * @param {string} name
 * @returns {string}
 */
export function getInitials(name) {
  if (!name || typeof name !== 'string' || !name.trim()) return 'CV';
  return name
    .trim()
    .split(/\s+/)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 3);
}

/**
 * Generate a safe export filename from a person's name.
 * @param {string} name
 * @returns {string} – e.g. "lebenslauf_max_mustermann.json"
 */
export function createExportFilename(name) {
  const safe = (name || 'cv').toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_-]/g, '');
  return `lebenslauf_${safe}.json`;
}

/**
 * Safely parse a JSON string. Returns null on any error.
 * @param {string} str
 * @returns {object|null}
 */
export function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

/**
 * Check whether a value looks like a minimal valid CV data object.
 * @param {*} data
 * @returns {boolean}
 */
export function isValidCVData(data) {
  return (
    data !== null &&
    typeof data === 'object' &&
    !Array.isArray(data) &&
    typeof data.personal === 'object' &&
    data.personal !== null
  );
}

/**
 * Block templates used when adding new items to each CV section.
 * Values are plain objects / primitives – safe to deep-clone.
 */
export const blockTemplates = {
  competencies: { title: 'Neue Kernkompetenz', description: 'Beschreibung der Kernkompetenz.' },
  languages: { name: 'Neue Sprache', level: 'Fließend', percentage: 80 },
  certifications: { title: 'Neues Zertifikat', authority: 'Aussteller-Institution', date: 'Jahr' },
  workExperience: {
    role: 'Neue Position / Rolle',
    company: 'Name des Arbeitgebers, Standort',
    date: 'Zeitraum (z.B. 2024)',
    details: ['Wichtigste Leistung oder Aufgabe hier eintragen.']
  },
  education: { degree: 'Neuer Abschluss / Studiengang', institution: 'Schule / Hochschule', date: 'Zeitraum' },
  methodsAndTools: 'Neuer Tool-Eintrag',
  hobbies: 'Anderes Hobby / Interesse',
  projects: {
    title: 'Neues Projekt',
    duration: 'Dauer • Jahr',
    role: 'Deine Rolle im Projekt',
    description: 'Kurze Beschreibung des Projekts.',
    technologies: ['Tech1', 'Tech2']
  },
  openSource: {
    title: 'Neues Open-Source-Projekt',
    role: 'Creator',
    description: 'Kurze Beschreibung des Open-Source-Tools.',
    technologies: ['Tech1']
  }
};

/**
 * Create a deep-cloned template item for the given section name.
 * Returns null if no template exists for that section.
 * @param {string} section
 * @returns {object|string|null}
 */
export function createBlockFromTemplate(section) {
  const tpl = blockTemplates[section];
  if (tpl === undefined) return null;
  return JSON.parse(JSON.stringify(tpl));
}
