<script setup>
import { computed, useId, ref } from 'vue'

/**
 * BaseInput - Component input cơ bản, hỗ trợ v-model, disabled, prefix/suffix.
 */
const props = defineProps({
  /** Giá trị liên kết với v-model */
  modelValue: {
    type: [String, Number, Array],
    default: '',
  },
  /** Bật chế độ Input Tag */
  tag: {
    type: Boolean,
    default: false,
  },
  /** Loại input (text, password, email, number...) */
  type: {
    type: String,
    default: 'text',
  },
  /** Nhãn hiển thị phía trên input */
  label: {
    type: String,
    default: '',
  },
  /** Placeholder cho input */
  placeholder: {
    type: String,
    default: '',
  },
  /** Vô hiệu hóa input */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Trạng thái chỉ đọc (không thể chỉnh sửa nhưng vẫn nhận focus) */
  readonly: {
    type: Boolean,
    default: false,
  },
  /** Kích thước: 'sm' | 'md' | 'lg' */
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg'].includes(val),
  },
  /** Trạng thái validation ('normal', 'success', 'warning', 'error') */
  status: {
    type: String,
    default: 'normal',
    validator: (val) => ['normal', 'success', 'warning', 'error'].includes(val),
  },
  /** Thông báo hiển thị dưới input (ví dụ message lỗi) */
  message: {
    type: String,
    default: '',
  },
  /** Cho phép xóa input */
  clearable: {
    type: Boolean,
    default: false,
  },
  /** Số lượng ký tự (hoặc tags) tối đa */
  maxLength: {
    type: [Number, String],
    default: null,
  },
  /** Hiển thị đếm số lượng ký tự/tags */
  showCount: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change', 'clear'])

// Tự động tạo ID cho input để liên kết với label
const defaultId = useId()

// Ref để tương tác trực tiếp với thẻ input (nếu thẻ cha muốn gọi hàm focus)
const inputRef = ref(null)

function focusInput() {
  if (inputRef.value) {
    inputRef.value.focus()
  }
}

// Expose the focus method to parent
defineExpose({
  focus: focusInput,
  input: inputRef,
})

const localTagInputValue = ref('')

function handleInput(event) {
  if (props.disabled || props.readonly) {
    return
  }

  if (props.tag) {
    localTagInputValue.value = event.target.value
  } else {
    emit('update:modelValue', event.target.value)
  }
}

// Đừng quên khai báo thêm event 'clear' trong defineEmits(['update:modelValue', 'focus', 'blur', 'change', 'clear'])
function clearInput() {
  if (props.disabled || props.readonly) {
    return
  }
  // Xử lý giá trị xoá: Nếu đang là Tag mode thì mảng rỗng, Input thường thì chuỗi rỗng
  const emptyValue = props.tag ? [] : ''

  emit('update:modelValue', emptyValue)
  emit('clear') // Phát thêm sự kiện clear để thẻ cha (nếu cần) hứng được

  // Focus lại vào input để user có thể gõ tiếp liền
  focusInput()
}
function handleKeyDown(event) {
  if (props.disabled || props.readonly) {
    return
  }

  if (props.tag) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      const val = localTagInputValue.value.trim()
      if (val) {
        const currentArray = Array.isArray(props.modelValue) ? props.modelValue : []
        if (!currentArray.includes(val)) {
          emit('update:modelValue', [...currentArray, val])
        }
        localTagInputValue.value = ''
        if (inputRef.value) {
          inputRef.value.value = ''
        }
      }
    } else if (event.key === 'Backspace' && !localTagInputValue.value) {
      const currentArray = Array.isArray(props.modelValue) ? props.modelValue : []
      if (currentArray.length > 0) {
        const newArray = [...currentArray]
        newArray.pop()
        emit('update:modelValue', newArray)
      }
    }
  }
}

function removeTag(index) {
  if (props.disabled || props.readonly) {
    return
  }
  const currentArray = Array.isArray(props.modelValue) ? props.modelValue : []
  const newArray = [...currentArray]
  newArray.splice(index, 1)
  emit('update:modelValue', newArray)
}

function handleChange(event) {
  emit('change', event.target.value)
}

function handleFocus(event) {
  emit('focus', event)
}

function handleBlur(event) {
  emit('blur', event)
}

// Logic đếm số lượng ký tự hoặc số lượng tag
const charCount = computed(() => {
  if (props.tag && Array.isArray(props.modelValue)) {
    return props.modelValue.length
  }
  if (props.modelValue === null || props.modelValue === undefined) {
    return 0
  }
  return String(props.modelValue).length
})

// Xử lý class linh hoạt cho wrapper
const wrapperClasses = computed(() => {
  return [
    `base-input`,
    `base-input--${props.size}`,
    `base-input--${props.status}`,
    {
      'base-input--disabled': props.disabled,
      'base-input--readonly': props.readonly,
      'base-input--tag': props.tag,
    },
  ]
})
</script>

<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="defaultId" class="base-input__label">
      {{ label }}
    </label>

    <div class="base-input__control" @click="focusInput">
      <!-- Slot ghép icon hoặc thành phần tiền tố -->
      <div v-if="$slots.prefix" class="base-input__affix base-input__affix--prefix">
        <slot name="prefix"></slot>
      </div>

      <!-- Wrapper cho list các tag và thẻ input thật -->
      <div class="base-input__wrapper">
        <template v-if="tag && Array.isArray(modelValue)">
          <span v-for="(t, index) in modelValue" :key="index" class="base-tag">
            {{ t }}
            <button
              type="button"
              class="base-tag__remove"
              @click.stop="removeTag(index)"
              :disabled="disabled || readonly"
            >
              &times;
            </button>
          </span>
        </template>

        <input
          :id="defaultId"
          ref="inputRef"
          :type="type"
          :value="tag ? localTagInputValue : modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :maxlength="!tag ? maxLength : null"
          class="base-input__element"
          @input="handleInput"
          @keydown="handleKeyDown"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>

      <!-- Nút clear (xóa input) -->
      <div
        v-if="clearable && ((tag && modelValue && modelValue.length > 0) || (!tag && modelValue))"
        class="base-input__clear"
        title="Xóa"
        @click.stop="clearInput"
      >
        <span class="base-input__clear-icon">&times;</span>
      </div>

      <!-- Slot ghép icon hoặc thành phần hậu tố -->
      <div v-if="$slots.suffix" class="base-input__affix base-input__affix--suffix">
        <slot name="suffix"></slot>
      </div>
    </div>

    <!-- Vùng hiển thị thông báo và bộ đếm -->
    <div
      v-if="message || showCount"
      class="base-input__footer"
    >
      <div class="base-input__message">
        {{ message }}
      </div>
      <div
        v-if="showCount"
        class="base-input__count"
      >
        {{ charCount }} <span v-if="maxLength">/ {{ maxLength }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* ── Variables & Setup ─────────────────────────────────────────── */
.base-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  position: relative;
  width: 100%;

  --input-color-border: var(--color-border-strong);
  --input-color-focus-ring: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
  --input-color-focus-border: var(--color-primary-500);

  // ── Label ─────────────────────────────────────────────────────────────
  &__label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
    margin-bottom: var(--spacing-1);
    display: inline-block;
  }

  // ── Control Wrapper (chứa input và slots) ─────────────────────────────
  &__control {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--color-bg);
    border: 1px solid var(--input-color-border);
    border-radius: var(--radius-md);
    transition:
      border-color var(--transition-fast),
      box-shadow var(--transition-fast),
      background-color var(--transition-fast);
    overflow: hidden;

    &:focus-within {
      border-color: var(--input-color-focus-border);
      box-shadow: 0 0 0 3px var(--input-color-focus-ring);
      outline: none;
    }
  }

  // ── Wrapper (flex container cho tags và input) ────────────────────────
  &__wrapper {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--spacing-2);
    min-width: 0; // Để prevent flex xẹp
  }

  // ── Input Element ─────────────────────────────────────────────────────
  &__element {
    flex: 1;
    min-width: 60px;
    border: none;
    background: transparent;
    color: var(--color-text);
    font-family: inherit;
    font-size: inherit; // Bị đè bởi size md/lg bên dưới
    line-height: var(--line-height-normal);
    outline: none;
    transition: color var(--transition-fast);

    &::placeholder {
      color: var(--color-text-subtle);
      opacity: 1;
    }
  }

  // ── Tag Chip ──────────────────────────────────────────────────────────
  .base-tag {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-1);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    padding: 2px var(--spacing-2);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    color: var(--color-text);
    white-space: nowrap;

    &__remove {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      appearance: none;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text-muted);
      font-size: 14px;
      border-radius: 50%;
      height: 16px;
      width: 16px;

      &:hover {
        background: var(--color-border);
        color: var(--color-text);
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  // ── Clear Button ──────────────────────────────────────────────────────
  &__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 var(--spacing-2);

    &-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--color-border-strong);
      color: var(--color-bg);
      font-size: 14px;
      line-height: 1;
      padding-bottom: 2px; // Căn giữa dấu x

      &:hover {
        background-color: var(--color-text-muted);
      }
    }
  }

  // ── Affix (Prefix/Suffix) ─────────────────────────────────────────────
  &__affix {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
    white-space: nowrap;

    &--prefix {
      padding-left: var(--spacing-3);
      padding-right: var(--spacing-2);
    }

    &--suffix {
      padding-right: var(--spacing-3);
      padding-left: var(--spacing-2);
    }
  }

  // ── Footer (Message & Count) ──────────────────────────────────────────
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--spacing-2);
    margin-top: var(--spacing-1);
  }

  &__message {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
    flex: 1;
  }

  &__count {
    font-size: var(--font-size-xs);
    color: var(--color-text-subtle);
    white-space: nowrap;
    text-align: right;
    margin-left: auto;
  }

  // ── State Variants ────────────────────────────────────────────────────

  // Disabled
  &--disabled {
    opacity: 0.6;

    .base-input__control {
      background-color: var(--color-bg-subtle);
      border-color: var(--color-border);
    }

    .base-input__element {
      cursor: not-allowed;
      color: var(--color-text-muted);
      -webkit-text-fill-color: var(--color-text-muted); // fix for iOS Safari
    }

    .base-input__label {
      cursor: not-allowed;
    }
  }

  // Readonly
  &--readonly {
    .base-input__control {
      background-color: var(--color-bg-subtle);
    }
  }

  // ── Validation Status Variants ────────────────────────────────────────
  &--success {
    --input-color-focus-border: var(--color-success-500);
    --input-color-focus-ring: color-mix(in srgb, var(--color-success-500) 15%, transparent);

    .base-input__control {
      border-color: var(--color-success-500);
    }
    .base-input__message {
      color: var(--color-success-600);
    }
  }

  &--warning {
    --input-color-focus-border: var(--color-warning-500);
    --input-color-focus-ring: color-mix(in srgb, var(--color-warning-500) 15%, transparent);

    .base-input__control {
      border-color: var(--color-warning-500);
    }
    .base-input__message {
      color: var(--color-warning-600);
    }
  }

  &--error {
    --input-color-focus-border: var(--color-danger-500);
    --input-color-focus-ring: color-mix(in srgb, var(--color-danger-500) 15%, transparent);

    .base-input__control {
      border-color: var(--color-danger-500);
    }
    .base-input__message {
      color: var(--color-danger-600);
    }
  }

  // ── Size Variants ─────────────────────────────────────────────────────
  &--sm {
    .base-input__wrapper {
      padding: 2px var(--spacing-2);
    }

    .base-input__element {
      height: 24px;
      font-size: var(--font-size-xs);
    }

    .base-input__control {
      border-radius: var(--radius-sm);
    }

    .base-input__affix {
      &--prefix {
        padding-left: var(--spacing-2);
        padding-right: var(--spacing-1);
        font-size: var(--font-size-xs);
      }
      &--suffix {
        padding-right: var(--spacing-2);
        padding-left: var(--spacing-1);
        font-size: var(--font-size-xs);
      }
    }
  }

  &--md {
    .base-input__wrapper {
      padding: 4px var(--spacing-3);
    }

    .base-input__element {
      height: 28px;
      font-size: var(--font-size-sm);
    }

    .base-input__control {
      border-radius: var(--radius-md);
    }

    /* No specific affix changes for md, inherit default */
  }

  &--lg {
    .base-input__wrapper {
      padding: calc(var(--spacing-2) + 2px) var(--spacing-4);
    }

    .base-input__element {
      height: 32px;
      font-size: var(--font-size-md);
    }

    .base-input__control {
      border-radius: var(--radius-lg);
    }

    .base-input__affix {
      &--prefix {
        padding-left: var(--spacing-4);
      }
      &--suffix {
        padding-right: var(--spacing-4);
      }
    }

    .base-input__label {
      font-size: var(--font-size-md);
    }
  }
}
</style>
