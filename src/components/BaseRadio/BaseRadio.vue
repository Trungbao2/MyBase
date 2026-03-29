<script setup>
import { computed } from 'vue'

/**
 * BaseRadio - Component radio button cơ bản, hỗ trợ v-model, disabled, size.
 */
const props = defineProps({
    /** Giá trị liên kết với v-model của nhóm radio */
    modelValue: {
        type: [String, Number, Boolean],
        default: null,
    },
    /** Giá trị của radio button này */
    value: {
        type: [String, Number, Boolean],
        required: true,
    },
    /** Nhãn hiển thị bên cạnh radio button */
    label: {
        type: String,
        default: '',
    },
    /** Vô hiệu hóa radio button */
    disabled: {
        type: Boolean,
        default: false,
    },
    /** Kích thước: 'sm' | 'md' | 'lg' */
    size: {
        type: String,
        default: 'md',
        validator: (val) => ['sm', 'md', 'lg'].includes(val),
    },
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => props.modelValue === props.value)

function handleChange() {
    if (!props.disabled) {
        emit('update:modelValue', props.value)
    }
}
</script>

<template>
    <label
        class="base-radio"
        :class="[
            `base-radio--${size}`,
            { 'base-radio--checked': isChecked },
            { 'base-radio--disabled': disabled },
        ]"
        @click.prevent="handleChange"
    >
        <!-- Hidden native input để accessibility vẫn hoạt động -->
        <input
            type="radio"
            class="base-radio__input"
            :checked="isChecked"
            :disabled="disabled"
            :value="value"
            @change="handleChange"
        />

        <!-- Custom radio visual -->
        <span class="base-radio__control">
            <span class="base-radio__dot" />
        </span>

        <!-- Label -->
        <span v-if="label || $slots.default" class="base-radio__label">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<style lang="scss" scoped>
// ─── Base ─────────────────────────────────────────────────────────────────────
.base-radio {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    cursor: pointer;
    user-select: none;
    position: relative;
    transition: opacity var(--transition-fast);

    // ── Hidden native input ──────────────────────────────────────────────────
    &__input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        pointer-events: none;
    }

    // ── Custom circle control ────────────────────────────────────────────────
    &__control {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border-radius: var(--radius-full);
        border: 2px solid var(--color-border);
        background: var(--color-bg);
        transition: border-color var(--transition-fast), background var(--transition-fast),
            box-shadow var(--transition-fast);
    }

    // ── Inner dot ───────────────────────────────────────────────────────────
    &__dot {
        border-radius: var(--radius-full);
        background: var(--color-primary-500);
        transform: scale(0);
        transition: transform var(--transition-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    // ── Label ───────────────────────────────────────────────────────────────
    &__label {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-text);
        line-height: 1.4;
        transition: color var(--transition-fast);
    }

    // ── Hover ───────────────────────────────────────────────────────────────
    &:hover:not(.base-radio--disabled) {
        .base-radio__control {
            border-color: var(--color-primary-400);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary-500) 12%, transparent);
        }
    }

    // ── Checked ─────────────────────────────────────────────────────────────
    &--checked {
        .base-radio__control {
            border-color: var(--color-primary-500);
            background: var(--color-primary-50);
        }

        .base-radio__dot {
            transform: scale(1);
        }

        .base-radio__label {
            color: var(--color-primary-700);
        }
    }

    // ── Disabled ────────────────────────────────────────────────────────────
    &--disabled {
        opacity: 0.5;
        cursor: not-allowed;

        .base-radio__control {
            background: var(--color-bg-subtle);
        }
    }

    // ── Sizes ───────────────────────────────────────────────────────────────
    &--sm {
        .base-radio__control {
            width: 14px;
            height: 14px;
        }

        .base-radio__dot {
            width: 6px;
            height: 6px;
        }

        .base-radio__label {
            font-size: var(--font-size-xs);
        }
    }

    &--md {
        .base-radio__control {
            width: 18px;
            height: 18px;
        }

        .base-radio__dot {
            width: 8px;
            height: 8px;
        }

        .base-radio__label {
            font-size: var(--font-size-sm);
        }
    }

    &--lg {
        .base-radio__control {
            width: 22px;
            height: 22px;
        }

        .base-radio__dot {
            width: 10px;
            height: 10px;
        }

        .base-radio__label {
            font-size: var(--font-size-md);
        }
    }
}
</style>
