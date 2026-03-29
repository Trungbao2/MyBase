<script setup>
/**
 * BaseSegment — Thanh phân đoạn (tab/pill selector) tái sử dụng
 *
 * @example
 * <BaseSegment v-model="activeTab" :items="[{ value: 'a', label: 'Tab A' }]" />
 */
const props = defineProps({
    /** Giá trị đang được chọn (v-model) */
    modelValue: {
        type: [String, Number],
        required: true,
    },
    /**
     * Danh sách các mục
     * @type {{ value: string|number, label: string, icon?: string }[]}
     */
    items: {
        type: Array,
        required: true,
    },
    /** Kích thước */
    size: {
        type: String,
        default: 'md',
        validator: (val) => ['sm', 'md', 'lg'].includes(val),
    },
})

const emit = defineEmits(['update:modelValue'])

function select(value) {
    emit('update:modelValue', value)
}
</script>

<template>
    <div class="segment" :class="`segment--${size}`" role="tablist">
        <button
            v-for="item in items"
            :key="item.value"
            class="segment__item"
            :class="{ 'segment__item--active': modelValue === item.value }"
            role="tab"
            :aria-selected="modelValue === item.value"
            @click="select(item.value)"
        >
            <span v-if="item.icon" class="segment__icon">{{ item.icon }}</span>
            <span class="segment__label">{{ item.label }}</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.segment {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 3px;
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);

    // ── Sizes ──────────────────────────────────────────────────────────
    &--sm {
        .segment__item {
            height: 1.75rem;
            padding: 0 var(--spacing-3);
            font-size: var(--font-size-xs);
            border-radius: calc(var(--radius-xl) - 3px);
        }
    }

    &--md {
        .segment__item {
            height: 2rem;
            padding: 0 var(--spacing-4);
            font-size: var(--font-size-sm);
            border-radius: calc(var(--radius-xl) - 3px);
        }
    }

    &--lg {
        .segment__item {
            height: 2.5rem;
            padding: 0 var(--spacing-5);
            font-size: var(--font-size-md);
            border-radius: calc(var(--radius-xl) - 3px);
        }
    }
}

.segment__item {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    font-family: var(--font-family-sans);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-muted);
    background: transparent;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast),
        box-shadow var(--transition-fast);

    &:hover:not(.segment__item--active) {
        color: var(--color-text);
        background: var(--color-bg-muted);
    }

    // ── Active state ────────────────────────────────────────────────────
    &--active {
        background: var(--color-bg);
        color: var(--color-text);
        font-weight: var(--font-weight-semibold);
        box-shadow:
            0 1px 3px rgb(0 0 0 / 0.1),
            0 1px 2px rgb(0 0 0 / 0.06);
    }
}

.segment__icon {
    font-size: 1em;
    line-height: 1;
}

.segment__label {
    line-height: 1;
}
</style>
