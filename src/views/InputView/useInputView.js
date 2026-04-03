import { ref } from 'vue'
import { VIEW_TAB } from '@/enum/Enumration'
import { VIEW_TABS } from '@/common/radio.constant'

/**
 * useInputView - Composable quản lý logic cho màn hình InputView
 *
 * @returns {{ activeTab, tabs, textValue, numberValue, disabledValue, passwordValue, sizesValues, validationValues }}
 */
export function useInputView() {
    // ── Tab navigation ───────────────────────────────────────────────────────
    const activeTab = ref(VIEW_TAB.EXAMPLES)
    const tabs = VIEW_TABS

    // ── Demo data ────────────────────────────────────────────────────────────
    const textValue = ref('')
    const numberValue = ref('')
    const disabledValue = ref('Not allowed')
    const passwordValue = ref('')
    
    // Tag mode demo
    const tagsValue = ref(['vue', 'react', 'angular'])

    // Clearable demo
    const clearableValue = ref('Gõ vào đây và xóa...')


    const sizesValues = ref({
        sm: '',
        md: '',
        lg: ''
    })

    const validationValues = ref({
        normal: '',
        success: '1234-5678-9012-3456',
        warning: 'Short',
        error: 'Invalid email format'
    })

    return {
        activeTab,
        tabs,
        textValue,
        numberValue,
        disabledValue,
        passwordValue,
        sizesValues,
        validationValues,
        tagsValue,
        clearableValue
    }
}
