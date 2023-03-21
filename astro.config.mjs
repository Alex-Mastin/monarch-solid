import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import viteCompression from 'vite-plugin-compression'
import solid from '@astrojs/solid-js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  integrations: [
    solid(),
    tailwind()
  ],
  vite: {
    build: {
      minify: true,
      rollupOptions: {
        treeshake: true
      },
      target: 'esnext'
    },
    deps: { registerNodeLoader: true },
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
    }
  }
})
