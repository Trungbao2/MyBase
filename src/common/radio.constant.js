import {
    VIEW_TAB,
    RADIO_SIZE,
    RADIO_FRUIT_VALUE,
    RADIO_DISABLED_VALUE,
} from '@/enum/Enumration'

/**
 * Danh sách tab điều hướng dùng trong các màn hình component.
 * @type {Array<{ value: string, label: string }>}
 */
export const VIEW_TABS = Object.freeze([
    { value: VIEW_TAB.EXAMPLES, label: 'Ví dụ' },
    { value: VIEW_TAB.DOCS, label: 'Tài liệu' },
])

/**
 * Danh sách options demo Basic usage của BaseRadio.
 * @type {Array<{ value: string, label: string }>}
 */
export const RADIO_FRUIT_OPTIONS = Object.freeze([
    { value: RADIO_FRUIT_VALUE.OPTION_1, label: '🍎 Táo' },
    { value: RADIO_FRUIT_VALUE.OPTION_2, label: '🍊 Cam' },
    { value: RADIO_FRUIT_VALUE.OPTION_3, label: '🍇 Nho' },
])

/**
 * Danh sách options demo Sizes của BaseRadio.
 * @type {Array<{ value: string, label: string }>}
 */
export const RADIO_SIZE_OPTIONS = Object.freeze([
    { value: RADIO_SIZE.SM, label: 'Small' },
    { value: RADIO_SIZE.MD, label: 'Medium' },
    { value: RADIO_SIZE.LG, label: 'Large' },
])

/**
 * Danh sách options demo Disabled của BaseRadio.
 * @type {Array<{ value: string, label: string, disabled?: boolean }>}
 */
export const RADIO_DISABLED_OPTIONS = Object.freeze([
    { value: RADIO_DISABLED_VALUE.ENABLED, label: 'Enabled' },
    { value: RADIO_DISABLED_VALUE.DISABLED_CHECKED, label: 'Disabled (checked)', disabled: true },
    { value: RADIO_DISABLED_VALUE.ACTIVE, label: 'Active' },
])
