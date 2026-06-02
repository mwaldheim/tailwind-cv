import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      exclude: ['src/**/*.test.js', 'src/**/*.spec.js'],
      reporter: ['text', 'lcov'],
      // Thresholds steigen mit jeder Testrunde – UI-Code per E2E abgedeckt
      thresholds: {
        lines: 25,
        functions: 20,
        branches: 15,
        statements: 25
      }
    }
  }
});
