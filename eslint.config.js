import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  // ── Ignore patterns ──────────────────────────────────────────────────────────
  {
    ignores: ['dist/**', 'node_modules/**', '*.min.js', 'coverage/**'],
  },

  // ── JavaScript base rules ─────────────────────────────────────────────────────
  js.configs.recommended,

  // ── Vue 3 rules ───────────────────────────────────────────────────────────────
  ...pluginVue.configs['flat/recommended'],

  // ── Custom overrides ──────────────────────────────────────────────────────────
  {
    rules: {
      // Vue
      'vue/multi-word-component-names': 'off',       // Allow single-word names like BaseButton
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'vue/no-unused-vars': 'error',
      'vue/no-v-html': 'warn',
      'vue/order-in-components': 'error',
      'vue/html-self-closing': ['error', {
        html: { void: 'always', normal: 'never', component: 'always' },
        svg: 'always',
        math: 'always',
      }],
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/define-props-declaration': ['error', 'runtime'],   // use defineProps({})
      'vue/define-emits-declaration': ['error', 'runtime'],   // use defineEmits([])

      // JavaScript
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'object-shorthand': ['error', 'always'],
    },
  },
]
