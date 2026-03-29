import { ref } from 'vue'

/**
 * useButtonsView - Composable quản lý logic cho màn hình ButtonsView
 *
 * @returns {{ activeTab, tabs, loading, simulateLoading }}
 */
export function useButtonsView() {
    const LOADING_DURATION_MS = 2000

    // ── Tab navigation ──────────────────────────────────────────────────────
    const activeTab = ref('examples')

    const tabs = [
        { value: 'examples', label: 'Ví dụ' },
        { value: 'docs', label: 'Tài liệu' },
    ]

    // ── Demo logic ──────────────────────────────────────────────────────────
    const loading = ref(false)

    function simulateLoading() {
        loading.value = true
        setTimeout(() => { loading.value = false }, LOADING_DURATION_MS)
    }

    return {
        /** Tab đang được chọn: 'examples' | 'docs' */
        activeTab,
        /** Danh sách tabs của trang */
        tabs,
        /** Trạng thái loading của nút demo */
        loading,
        /** Kích hoạt trạng thái loading trong 2 giây */
        simulateLoading,
    }
}
