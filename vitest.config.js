// /// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})