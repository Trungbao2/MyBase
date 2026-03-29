<script setup>
import { useAppLayoutState } from './useAppLayoutState.js'

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  /** Chiều rộng sidebar khi mở (px) */
  sidebarWidth: {
    type: Number,
    default: 260,
  },
  /** Chiều rộng sidebar khi thu nhỏ (px) */
  sidebarCollapsedWidth: {
    type: Number,
    default: 64,
  },
  /** Chiều cao header (px) */
  headerHeight: {
    type: Number,
    default: 60,
  },
  /** Sidebar mặc định có thu nhỏ không */
  defaultCollapsed: {
    type: Boolean,
    default: false,
  },
})

// ─── Emits ────────────────────────────────────────────────────────────────────
const emit = defineEmits(['sidebar-toggle'])

// ─── State & Logic (tách ra useAppLayoutState) ────────────────────────────────
const { isCollapsed, isMobileOpen, cssVars, toggleSidebar, toggleMobile, closeMobile } =
    useAppLayoutState(props, emit)
</script>

<template>
  <div class="app-layout" :style="cssVars">

    <!-- ── Header ─────────────────────────────────────────────────────────── -->
    <header class="app-layout__header">
      <!-- Hamburger (mobile) / Collapse toggle (desktop) -->
      <button
        class="app-layout__toggle"
        :class="{ 'app-layout__toggle--collapsed': isCollapsed }"
        :aria-label="isCollapsed ? 'Mở sidebar' : 'Thu nhỏ sidebar'"
        @click="toggleSidebar"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <!-- Header slot content -->
      <slot name="header" />
    </header>

    <!-- ── Body (sidebar + content) ───────────────────────────────────────── -->
    <div class="app-layout__body">

      <!-- Overlay (mobile) -->
      <div
        class="app-layout__overlay"
        :class="{ 'app-layout__overlay--visible': isMobileOpen }"
        @click="closeMobile"
      />

      <!-- Sidebar -->
      <aside
        class="app-layout__sidebar"
        :class="{
          'app-layout__sidebar--collapsed': isCollapsed,
          'app-layout__sidebar--mobile-open': isMobileOpen,
        }"
        :aria-expanded="!isCollapsed"
      >
        <div class="app-layout__sidebar-inner">
          <slot name="sidebar" :is-collapsed="isCollapsed" />
        </div>
      </aside>

      <!-- Main content -->
      <main class="app-layout__content">
        <slot />
      </main>

    </div>
  </div>
</template>

<style lang="scss" scoped>
// ─── Root layout ──────────────────────────────────────────────────────────────
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

// ─── Header ───────────────────────────────────────────────────────────────────
.app-layout__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-fixed);
  height: var(--layout-header-height);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: 0 var(--spacing-5);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
  background-color: color-mix(in srgb, var(--color-bg) 90%, transparent);
  transition: background-color var(--transition-normal);
}

// ─── Toggle button ───────────────────────────────────────────────────────────
.app-layout__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-lg);
  color: var(--color-text-muted);
  flex-shrink: 0;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);

  svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
  }

  &:hover {
    background: var(--color-bg-subtle);
    color: var(--color-text);
  }

  &--collapsed {
    svg {
      transform: rotate(90deg);
    }
  }
}

// ─── Body ─────────────────────────────────────────────────────────────────────
.app-layout__body {
  display: flex;
  flex: 1;
  padding-top: var(--layout-header-height);
  position: relative;
}

// ─── Overlay (mobile) ─────────────────────────────────────────────────────────
.app-layout__overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-index-fixed) - 1);
  background: rgb(0 0 0 / 0.5);
  opacity: 0;
  transition: opacity var(--transition-normal);
  backdrop-filter: blur(2px);

  &--visible {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: block;
  }
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
.app-layout__sidebar {
  position: fixed;
  top: var(--layout-header-height);
  left: 0;
  bottom: 0;
  z-index: calc(var(--z-index-fixed) - 1);
  width: var(--layout-sidebar-width);
  background: var(--color-bg-muted);
  border-right: 1px solid var(--color-border);
  overflow: hidden;
  transition: width var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);

  // Collapsed state
  &--collapsed {
    width: var(--layout-sidebar-collapsed-width);
  }

  // Mobile: hidden by default, slide in when open
  @media (max-width: 768px) {
    transform: translateX(-100%);
    width: var(--layout-sidebar-width) !important;
    transition:
      transform var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);

    &--mobile-open {
      transform: translateX(0);
    }
  }
}

.app-layout__sidebar-inner {
  width: var(--layout-sidebar-width);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  // Scrollbar tùy chỉnh
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-strong);
    border-radius: var(--radius-full);
  }
}

// ─── Content ──────────────────────────────────────────────────────────────────
.app-layout__content {
  flex: 1;
  margin-left: var(--layout-sidebar-current-width);
  min-width: 0;
  padding: var(--spacing-6);
  transition: margin-left var(--transition-normal) cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    margin-left: 0 !important;
  }
}
</style>
