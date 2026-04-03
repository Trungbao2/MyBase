/**
 * My UI - Component Library Entry Point
 *
 * Usage:
 *   import MyUI from 'my-ui'
 *   app.use(MyUI)
 *
 *   // Or import individually:
 *   import { BaseButton } from 'my-ui'
 */

// ── Import styles ─────────────────────────────────────────────────────────────
import './assets/styles/main.css'

// ── Components ────────────────────────────────────────────────────────────────
export { default as BaseButton } from './components/BaseButton/index.js'
export { default as AppLayout } from './components/AppLayout/index.js'
export { default as BaseRadio } from './components/BaseRadio/index.js'
export { default as BaseInput } from './components/BaseInput/index.js'

// ── Composables ───────────────────────────────────────────────────────────────
export { useTheme } from './composables/useTheme.js'

// ── Component list for app.use() ──────────────────────────────────────────────
import BaseButton from './components/BaseButton/index.js'
import AppLayout from './components/AppLayout/index.js'
import BaseRadio from './components/BaseRadio/index.js'
import BaseInput from './components/BaseInput/index.js'

const components = [BaseButton, AppLayout, BaseRadio, BaseInput]

// ── Plugin install ────────────────────────────────────────────────────────────
const MyUI = {
  install(app) {
    components.forEach((component) => {
      app.component(component.__name || component.name, component)
    })
  },
}

export default MyUI
