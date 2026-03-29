import { ref, watch } from 'vue'

/**
 * useTheme - Composable quản lý dark/light mode
 *
 * @example
 * const { theme, isDark, toggleTheme, setTheme } = useTheme()
 */
export function useTheme() {
  // ── State ──────────────────────────────────────────────────────────────────
  const STORAGE_KEY = 'my-ui-theme'

  const getInitialTheme = () => {
    // 1. Ưu tiên localStorage
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored

    // 2. Fallback: hệ thống
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const theme = ref(getInitialTheme())
  const isDark = ref(theme.value === 'dark')

  // ── Watchers ────────────────────────────────────────────────────────────────
  watch(theme, (newTheme) => {
    isDark.value = newTheme === 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem(STORAGE_KEY, newTheme)
  }, { immediate: true })

  // ── Methods ─────────────────────────────────────────────────────────────────
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(newTheme) {
    if (newTheme !== 'dark' && newTheme !== 'light') {
      console.warn(`[useTheme] Invalid theme: "${newTheme}". Expected "dark" or "light".`)
      return
    }
    theme.value = newTheme
  }

  return {
    /** Theme hiện tại: 'light' | 'dark' */
    theme,
    /** true nếu đang ở dark mode */
    isDark,
    /** Toggle giữa dark và light */
    toggleTheme,
    /** Set theme cụ thể */
    setTheme,
  }
}
