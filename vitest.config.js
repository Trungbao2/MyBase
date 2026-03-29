import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],

  test: {
    // Môi trường giả lập DOM
    environment: 'jsdom',

    // Alias @ → src/
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // Glob patterns cho test files
    include: ['src/**/*.{test,spec}.{js,ts}'],

    // Coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{js,vue}'],
      exclude: [
        'src/main.js',
        'src/router/**',
        'src/stores/**',
        'src/**/*.test.{js,ts}',
        'src/**/*.spec.{js,ts}',
      ],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
    },

    // Global imports (không cần import describe/it/expect mỗi file)
    globals: true,
  },
})
