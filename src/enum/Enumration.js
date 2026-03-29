/**
 * Enumration.js
 * Tập trung toàn bộ các hằng số kiểu enum của ứng dụng.
 * Dùng Object.freeze để đảm bảo bất biến tại runtime.
 */

// ─── Tab navigation ────────────────────────────────────────────────────────────

/** Các tab điều hướng dùng chung trong màn hình component */
export const VIEW_TAB = Object.freeze({
    EXAMPLES: 'examples',
    DOCS: 'docs',
})

// ─── Radio: kích thước ────────────────────────────────────────────────────────

/** Các giá trị kích thước hợp lệ của BaseRadio */
export const RADIO_SIZE = Object.freeze({
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
})

// ─── Radio: demo options ───────────────────────────────────────────────────────

/** Các giá trị option trong demo Basic usage */
export const RADIO_FRUIT_VALUE = Object.freeze({
    OPTION_1: 'option1',
    OPTION_2: 'option2',
    OPTION_3: 'option3',
})

/** Các giá trị option trong demo Disabled */
export const RADIO_DISABLED_VALUE = Object.freeze({
    ENABLED: 'enabled',
    DISABLED_CHECKED: 'disabled-checked',
    ACTIVE: 'active',
})
