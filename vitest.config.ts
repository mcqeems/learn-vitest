import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.ts', '**/*.test.ts'],
    exclude: ['**/node_modules/**'],
    reporters: ['default', 'html'],
    environment: 'node',
  },
});
