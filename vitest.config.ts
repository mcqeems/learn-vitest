import path = require('node:path');
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    include: ['**/__tests__/**/*.ts', '**/*.test.ts'],
    exclude: ['**/node_modules/**'],
    reporters: ['default', 'html'],
    environment: 'node',
    globals: true,
  },
});
