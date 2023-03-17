import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import viteCompression from 'vite-plugin-compression'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      minify: true,
      rollupOptions: {
        treeshake: true
      },
      target: 'esnext'
    },
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      conditions: ['development', 'browser']
    },
    test: {
      environment: 'jsdom',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        './e2e/**'
      ],
      globals: true,
      transformMode: { web: [/\.[jt]sx?$/] },
      setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
      // otherwise, solid would be loaded twice:
      deps: { registerNodeLoader: true },
      // if you have few tests, try commenting one
      // or both out to improve performance:
      threads: false,
      isolate: false
    }
  }
})