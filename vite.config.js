import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Detect if building library mode
const isLibBuild = process.env.BUILD_MODE === 'lib'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Only enable DevTools in dev mode
    !isLibBuild && vueDevTools(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // ── Library Build Mode ──────────────────────────────────────────────────────
  ...(isLibBuild && {
    build: {
      lib: {
        // Entry point của library
        entry: resolve(__dirname, 'src/index.js'),
        name: 'MyUI',
        // Output file names
        fileName: (format) => `my-ui.${format}.js`,
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        // Externalize Vue - không bundle vào lib
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          // CSS được tách thành file riêng
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') { return 'my-ui.css' }
            return assetInfo.name
          },
        },
      },
      // Xóa dist/ trước khi build
      emptyOutDir: true,
    },
  }),
})

