import { ref } from 'vue'
import { VIEW_TAB, RADIO_SIZE, RADIO_FRUIT_VALUE, RADIO_DISABLED_VALUE } from '@/enum/Enumration'
import { VIEW_TABS, RADIO_FRUIT_OPTIONS, RADIO_SIZE_OPTIONS, RADIO_DISABLED_OPTIONS } from '@/common/radio.constant'

/**
 * useRadioView - Composable quản lý logic cho màn hình RadioView
 *
 * @returns {{ activeTab, tabs, selectedBasic, selectedSize, selectedDisabled, optionsBasic, optionsSizes, optionsDisabled }}
 */
export function useRadioView() {
    // ── Tab navigation ───────────────────────────────────────────────────────
    const activeTab = ref(VIEW_TAB.EXAMPLES)

    const tabs = VIEW_TABS

    // ── Demo data ────────────────────────────────────────────────────────────
    const selectedBasic = ref(RADIO_FRUIT_VALUE.OPTION_1)
    const selectedSize = ref(RADIO_SIZE.MD)
    const selectedDisabled = ref(RADIO_DISABLED_VALUE.ENABLED)

    return {
        /** Tab đang được chọn: 'examples' | 'docs' */
        activeTab,
        /** Danh sách tabs của trang */
        tabs,
        /** Giá trị demo radio cơ bản */
        selectedBasic,
        /** Giá trị demo radio kích thước */
        selectedSize,
        /** Giá trị demo radio disabled */
        selectedDisabled,
        /** Danh sách options demo cơ bản */
        optionsBasic: RADIO_FRUIT_OPTIONS,
        /** Danh sách options demo kích thước */
        optionsSizes: RADIO_SIZE_OPTIONS,
        /** Danh sách options demo disabled */
        optionsDisabled: RADIO_DISABLED_OPTIONS,
    }
}
