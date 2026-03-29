<script setup>
import { computed } from 'vue'

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  /**
   * Kiểu hiển thị của button
   * @values 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'outline' | 'ghost'
   */
  variant: {
    type: String,
    default: 'default',
    validator: (val) =>
      ['default', 'primary', 'success', 'info', 'warning', 'danger', 'secondary', 'outline', 'ghost'].includes(val),
  },

  /**
   * Kích thước của button
   * @values 'sm' | 'md' | 'lg'
   */
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg'].includes(val),
  },

  /** Vô hiệu hóa button */
  disabled: {
    type: Boolean,
    default: false,
  },

  /** Trạng thái loading */
  loading: {
    type: Boolean,
    default: false,
  },

  /** Chiếm toàn bộ chiều rộng */
  block: {
    type: Boolean,
    default: false,
  },

  /**
   * Kiểu Plain — nền nhạt, chữ có màu
   */
  plain: {
    type: Boolean,
    default: false,
  },

  /**
   * Bo tròn hoàn toàn (pill shape)
   */
  round: {
    type: Boolean,
    default: false,
  },

  /**
   * Hình tròn — dùng cho icon-only button
   */
  circle: {
    type: Boolean,
    default: false,
  },

  /** HTML type attribute */
  type: {
    type: String,
    default: 'button',
  },
})

// ─── Emits ────────────────────────────────────────────────────────────────────
const emit = defineEmits(['click'])

// ─── Computed ─────────────────────────────────────────────────────────────────
const classes = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  {
    'btn--plain': props.plain,
    'btn--round': props.round,
    'btn--circle': props.circle,
    'btn--disabled': props.disabled,
    'btn--loading': props.loading,
    'btn--block': props.block,
  },
])

const isDisabled = computed(() => props.disabled || props.loading)

// ─── Handlers ─────────────────────────────────────────────────────────────────
function handleClick(event) {
  if (!isDisabled.value) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="classes"
    :type="type"
    :disabled="isDisabled"
    :aria-busy="loading"
    :aria-disabled="isDisabled"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="btn__spinner" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="40 60" />
      </svg>
    </span>

    <!-- Leading icon slot -->
    <span v-if="$slots['icon-left'] && !loading" class="btn__icon btn__icon--left">
      <slot name="icon-left" />
    </span>

    <!-- Default content -->
    <span v-if="!circle" class="btn__label">
      <slot />
    </span>

    <!-- Circle icon content -->
    <span v-if="circle" class="btn__icon btn__icon--circle">
      <slot />
    </span>

    <!-- Trailing icon slot -->
    <span v-if="$slots['icon-right']" class="btn__icon btn__icon--right">
      <slot name="icon-right" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
// ─── Color token map ──────────────────────────────────────────────────────────
// Mỗi variant: (solid bg, solid hover, solid active, text, border, plain-bg, plain-text, plain-border)
$variants: (
  'default': (
    bg:           var(--color-bg),
    bg-hover:     var(--color-bg-subtle),
    bg-active:    var(--color-bg-muted),
    text:         var(--color-text),
    border:       var(--color-border-strong),
    plain-bg:     var(--color-bg),
    plain-text:   var(--color-text),
    plain-border: var(--color-border-strong),
  ),
  'primary': (
    bg:           var(--color-primary-600),
    bg-hover:     var(--color-primary-700),
    bg-active:    var(--color-primary-800),
    text:         #fff,
    border:       transparent,
    plain-bg:     var(--color-primary-50),
    plain-text:   var(--color-primary-600),
    plain-border: var(--color-primary-200),
  ),
  'success': (
    bg:           #22c55e,
    bg-hover:     #16a34a,
    bg-active:    #15803d,
    text:         #fff,
    border:       transparent,
    plain-bg:     #f0fdf4,
    plain-text:   #16a34a,
    plain-border: #bbf7d0,
  ),
  'info': (
    bg:           #6b7280,
    bg-hover:     #4b5563,
    bg-active:    #374151,
    text:         #fff,
    border:       transparent,
    plain-bg:     #f3f4f6,
    plain-text:   #4b5563,
    plain-border: #d1d5db,
  ),
  'warning': (
    bg:           #f59e0b,
    bg-hover:     #d97706,
    bg-active:    #b45309,
    text:         #fff,
    border:       transparent,
    plain-bg:     #fffbeb,
    plain-text:   #d97706,
    plain-border: #fde68a,
  ),
  'danger': (
    bg:           var(--color-danger-500),
    bg-hover:     var(--color-danger-600),
    bg-active:    var(--color-danger-600),
    text:         #fff,
    border:       transparent,
    plain-bg:     #fff5f5,
    plain-text:   var(--color-danger-600),
    plain-border: #fed7d7,
  ),
  'secondary': (
    bg:           var(--color-bg-subtle),
    bg-hover:     var(--color-border),
    bg-active:    var(--color-border-strong),
    text:         var(--color-text),
    border:       var(--color-border),
    plain-bg:     var(--color-bg-subtle),
    plain-text:   var(--color-text-muted),
    plain-border: var(--color-border),
  ),
  'outline': (
    bg:           transparent,
    bg-hover:     var(--color-primary-50),
    bg-active:    var(--color-primary-100),
    text:         var(--color-primary-600),
    border:       var(--color-primary-500),
    plain-bg:     transparent,
    plain-text:   var(--color-primary-600),
    plain-border: var(--color-primary-500),
  ),
  'ghost': (
    bg:           transparent,
    bg-hover:     var(--color-bg-subtle),
    bg-active:    var(--color-bg-muted),
    text:         var(--color-text),
    border:       transparent,
    plain-bg:     transparent,
    plain-text:   var(--color-text),
    plain-border: transparent,
  ),
);

$sizes: (
  'sm': (
    height:     2rem,
    padding:    0 var(--spacing-3),
    font-size:  var(--font-size-sm),
    radius:     var(--radius-md),
    gap:        var(--spacing-1),
    icon-size:  14px,
    circle-w:   2rem,
  ),
  'md': (
    height:     2.5rem,
    padding:    0 var(--spacing-4),
    font-size:  var(--font-size-sm),
    radius:     var(--radius-lg),
    gap:        var(--spacing-2),
    icon-size:  16px,
    circle-w:   2.5rem,
  ),
  'lg': (
    height:     3rem,
    padding:    0 var(--spacing-6),
    font-size:  var(--font-size-md),
    radius:     var(--radius-lg),
    gap:        var(--spacing-2),
    icon-size:  18px,
    circle-w:   3rem,
  ),
);

// ─── Base Button ──────────────────────────────────────────────────────────────
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    opacity var(--transition-fast),
    transform var(--transition-fast);

  &:active:not(.btn--disabled):not(.btn--loading) {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }

  // ── Variants ───────────────────────────────────────────────
  @each $name, $props in $variants {
    &--#{$name} {
      background-color: map-get($props, bg);
      color:            map-get($props, text);
      border-color:     map-get($props, border);

      &:hover:not(.btn--disabled):not(.btn--loading) {
        background-color: map-get($props, bg-hover);
      }

      &:active:not(.btn--disabled):not(.btn--loading) {
        background-color: map-get($props, bg-active);
      }

      // Plain modifier — áp dụng khi .btn--plain đi kèm với variant này
      &.btn--plain {
        background-color: map-get($props, plain-bg);
        color:            map-get($props, plain-text);
        border-color:     map-get($props, plain-border);

        &:hover:not(.btn--disabled):not(.btn--loading) {
          // Plain hover: nhẹ hơn solid một chút
          background-color: map-get($props, bg);
          color:            map-get($props, text);
          border-color:     map-get($props, bg);
        }
      }
    }
  }

  // ── Sizes ──────────────────────────────────────────────────
  @each $name, $props in $sizes {
    &--#{$name} {
      height:        map-get($props, height);
      padding:       map-get($props, padding);
      font-size:     map-get($props, font-size);
      border-radius: map-get($props, radius);
      gap:           map-get($props, gap);

      .btn__icon svg {
        width:  map-get($props, icon-size);
        height: map-get($props, icon-size);
      }

      // Circle override
      &.btn--circle {
        width:   map-get($props, circle-w);
        padding: 0;
      }
    }
  }

  // ── Shape modifiers ────────────────────────────────────────
  &--round {
    border-radius: var(--radius-full) !important;
  }

  &--circle {
    border-radius: 50% !important;
    aspect-ratio: 1;
    padding: 0;

    .btn__icon--circle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  // ── States ─────────────────────────────────────────────────
  &--block {
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--loading {
    cursor: wait;
    pointer-events: none;
    position: relative;
  }
}

// ─── Spinner ──────────────────────────────────────────────────────────────────
.btn__spinner {
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1em;
    height: 1em;
    animation: btn-spin 0.75s linear infinite;
  }
}

@keyframes btn-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

// ─── Icon ─────────────────────────────────────────────────────────────────────
.btn__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// ─── Label ───────────────────────────────────────────────────────────────────
.btn__label {
  display: flex;
  align-items: center;
  gap: inherit;
}
</style>
