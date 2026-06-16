import { describe, it, expect } from 'vitest';
import {
  getValueByPath,
  setValueByPath,
  clampPercentage,
  getInitials,
  createExportFilename,
  safeJsonParse,
  isValidCVData,
  blockTemplates,
  createBlockFromTemplate
} from './cvHelpers.js';

// ---------------------------------------------------------------------------
// getValueByPath
// ---------------------------------------------------------------------------
describe('getValueByPath', () => {
  it('returns a top-level value', () => {
    expect(getValueByPath({ a: 1 }, 'a')).toBe(1);
  });

  it('returns a nested value via dot path', () => {
    expect(getValueByPath({ personal: { name: 'Max' } }, 'personal.name')).toBe('Max');
  });

  it('returns deeply nested value', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(getValueByPath(obj, 'a.b.c')).toBe(42);
  });

  it('returns undefined for missing key', () => {
    expect(getValueByPath({ a: 1 }, 'b')).toBeUndefined();
  });

  it('returns undefined when intermediate key is missing', () => {
    expect(getValueByPath({ a: 1 }, 'a.b.c')).toBeUndefined();
  });

  it('returns null when intermediate value is null (short-circuit)', () => {
    expect(getValueByPath({ a: null }, 'a.b')).toBeNull();
  });

  it('returns falsy values correctly (0, false, empty string)', () => {
    const obj = { a: { b: 0, c: false, d: '' } };
    expect(getValueByPath(obj, 'a.b')).toBe(0);
    expect(getValueByPath(obj, 'a.c')).toBe(false);
    expect(getValueByPath(obj, 'a.d')).toBe('');
  });
});

// ---------------------------------------------------------------------------
// setValueByPath
// ---------------------------------------------------------------------------
describe('setValueByPath', () => {
  it('sets a top-level property', () => {
    const obj = { a: 1 };
    setValueByPath(obj, 'a', 99);
    expect(obj.a).toBe(99);
  });

  it('sets a nested property', () => {
    const obj = { personal: { name: 'Old' } };
    setValueByPath(obj, 'personal.name', 'New');
    expect(obj.personal.name).toBe('New');
  });

  it('sets a deeply nested property', () => {
    const obj = { a: { b: { c: 0 } } };
    setValueByPath(obj, 'a.b.c', 7);
    expect(obj.a.b.c).toBe(7);
  });

  it('does not throw when intermediate key is missing', () => {
    const obj = { a: 1 };
    expect(() => setValueByPath(obj, 'x.y.z', 5)).not.toThrow();
  });

  it('does not throw when intermediate value is null', () => {
    const obj = { a: null };
    expect(() => setValueByPath(obj, 'a.b', 5)).not.toThrow();
  });

  it('sets a value to null', () => {
    const obj = { personal: { name: 'Max' } };
    setValueByPath(obj, 'personal.name', null);
    expect(obj.personal.name).toBeNull();
  });

  it('sets a value to an object', () => {
    const obj = { a: {} };
    setValueByPath(obj, 'a.b', { x: 1 });
    expect(obj.a.b).toEqual({ x: 1 });
  });
});

// ---------------------------------------------------------------------------
// clampPercentage
// ---------------------------------------------------------------------------
describe('clampPercentage', () => {
  it('returns the value unchanged when inside [0, 100]', () => {
    expect(clampPercentage(50)).toBe(50);
    expect(clampPercentage(0)).toBe(0);
    expect(clampPercentage(100)).toBe(100);
  });

  it('clamps values below 0 to 0', () => {
    expect(clampPercentage(-10)).toBe(0);
  });

  it('clamps values above 100 to 100', () => {
    expect(clampPercentage(200)).toBe(100);
  });

  it('converts numeric strings', () => {
    expect(clampPercentage('75')).toBe(75);
  });

  it('treats NaN as 0', () => {
    expect(clampPercentage('abc')).toBe(0);
    expect(clampPercentage(undefined)).toBe(0);
    expect(clampPercentage(null)).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// getInitials
// ---------------------------------------------------------------------------
describe('getInitials', () => {
  it('returns initials for a two-word name', () => {
    expect(getInitials('Max Mustermann')).toBe('MM');
  });

  it('returns initials for a three-word name', () => {
    expect(getInitials('Max Moritz Mustermann')).toBe('MMM');
  });

  it('returns only the first 3 initials for long names', () => {
    expect(getInitials('A B C D E')).toBe('ABC');
  });

  it('returns uppercased initials', () => {
    expect(getInitials('max mustermann')).toBe('MM');
  });

  it('returns "CV" for an empty string', () => {
    expect(getInitials('')).toBe('CV');
  });

  it('returns "CV" for a whitespace-only string', () => {
    expect(getInitials('   ')).toBe('CV');
  });

  it('returns "CV" for null', () => {
    expect(getInitials(null)).toBe('CV');
  });

  it('returns "CV" for undefined', () => {
    expect(getInitials(undefined)).toBe('CV');
  });

  it('returns "CV" for a non-string value', () => {
    expect(getInitials(42)).toBe('CV');
  });

  it('handles a single word name', () => {
    expect(getInitials('Cher')).toBe('C');
  });

  it('trims surrounding whitespace before processing', () => {
    expect(getInitials('  Max Muster  ')).toBe('MM');
  });
});

// ---------------------------------------------------------------------------
// createExportFilename
// ---------------------------------------------------------------------------
describe('createExportFilename', () => {
  it('creates filename from a regular name', () => {
    expect(createExportFilename('Max Mustermann')).toBe('lebenslauf_max_mustermann.json');
  });

  it('uses "cv" as fallback for empty name', () => {
    expect(createExportFilename('')).toBe('lebenslauf_cv.json');
    expect(createExportFilename(null)).toBe('lebenslauf_cv.json');
    expect(createExportFilename(undefined)).toBe('lebenslauf_cv.json');
  });

  it('removes special characters', () => {
    expect(createExportFilename('Markus Müller!')).toBe('lebenslauf_markus_mller.json');
  });

  it('collapses multiple spaces to a single underscore each', () => {
    expect(createExportFilename('Max   Muster')).toBe('lebenslauf_max_muster.json');
  });

  it('always ends with .json', () => {
    const fn = createExportFilename('Test');
    expect(fn.endsWith('.json')).toBe(true);
  });

  it('always starts with "lebenslauf_"', () => {
    const fn = createExportFilename('Test');
    expect(fn.startsWith('lebenslauf_')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// safeJsonParse
// ---------------------------------------------------------------------------
describe('safeJsonParse', () => {
  it('parses valid JSON object', () => {
    expect(safeJsonParse('{"a":1}')).toEqual({ a: 1 });
  });

  it('parses valid JSON array', () => {
    expect(safeJsonParse('[1,2,3]')).toEqual([1, 2, 3]);
  });

  it('returns null for invalid JSON', () => {
    expect(safeJsonParse('not json')).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(safeJsonParse('')).toBeNull();
  });

  it('returns null for undefined', () => {
    expect(safeJsonParse(undefined)).toBeNull();
  });

  it('returns null for null', () => {
    expect(safeJsonParse(null)).toBeNull();
  });

  it('returns null for truncated JSON', () => {
    expect(safeJsonParse('{"a":1')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// isValidCVData
// ---------------------------------------------------------------------------
describe('isValidCVData', () => {
  it('returns true for a minimal valid CV object', () => {
    expect(isValidCVData({ personal: { name: 'Max' } })).toBe(true);
  });

  it('returns false for null', () => {
    expect(isValidCVData(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isValidCVData(undefined)).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isValidCVData([])).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isValidCVData('hello')).toBe(false);
  });

  it('returns false when personal is missing', () => {
    expect(isValidCVData({ workExperience: [] })).toBe(false);
  });

  it('returns false when personal is null', () => {
    expect(isValidCVData({ personal: null })).toBe(false);
  });

  it('returns false when personal is not an object', () => {
    expect(isValidCVData({ personal: 'string' })).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// blockTemplates
// ---------------------------------------------------------------------------
describe('blockTemplates', () => {
  it('contains all expected section keys', () => {
    const keys = [
      'competencies', 'languages', 'certifications', 'workExperience',
      'education', 'methodsAndTools', 'hobbies', 'projects', 'openSource'
    ];
    keys.forEach(k => expect(blockTemplates).toHaveProperty(k));
  });

  it('languages template has name, level, percentage', () => {
    expect(blockTemplates.languages).toHaveProperty('name');
    expect(blockTemplates.languages).toHaveProperty('level');
    expect(blockTemplates.languages).toHaveProperty('percentage');
  });

  it('workExperience template has details array', () => {
    expect(Array.isArray(blockTemplates.workExperience.details)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// createBlockFromTemplate
// ---------------------------------------------------------------------------
describe('createBlockFromTemplate', () => {
  it('returns a deep clone for a known section', () => {
    const a = createBlockFromTemplate('competencies');
    const b = createBlockFromTemplate('competencies');
    expect(a).toEqual(b);
    expect(a).not.toBe(b); // different references
  });

  it('returns null for an unknown section', () => {
    expect(createBlockFromTemplate('unknown')).toBeNull();
    expect(createBlockFromTemplate('')).toBeNull();
  });

  it('clones workExperience details array independently', () => {
    const item = createBlockFromTemplate('workExperience');
    item.details.push('extra');
    const original = blockTemplates.workExperience;
    expect(original.details).toHaveLength(1);
  });

  it('clones string templates correctly (methodsAndTools)', () => {
    const item = createBlockFromTemplate('methodsAndTools');
    expect(typeof item).toBe('string');
  });

  it('clones hobbies string correctly', () => {
    expect(createBlockFromTemplate('hobbies')).toBe(blockTemplates.hobbies);
  });

  it('returns a new object for languages', () => {
    const item = createBlockFromTemplate('languages');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('percentage');
  });

  it('returns a new object for projects with technologies array', () => {
    const item = createBlockFromTemplate('projects');
    expect(Array.isArray(item.technologies)).toBe(true);
  });

  it('returns a new object for openSource', () => {
    const item = createBlockFromTemplate('openSource');
    expect(item).toHaveProperty('title');
  });
});
