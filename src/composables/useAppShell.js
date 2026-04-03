import { useRoute, useRouter } from 'vue-router'

/**
 * useAppShell - Composable quản lý navigation và trạng thái shell của App
 *
 * @returns {{ navGroups, navItems, isActive, isGroupActive, router }}
 */
export function useAppShell() {
    const route = useRoute()
    const router = useRouter()

    /** Danh sách nhóm điều hướng trong sidebar */
    const navGroups = [
        {
            id: 'library',
            label: 'Thư viện',
            items: [
                { id: 'buttons', path: '/buttons', icon: '🔘', label: 'BaseButton' },
                { id: 'layout', path: '/layout', icon: '📐', label: 'AppLayout' },
                { id: 'tokens', path: '/tokens', icon: '🎨', label: 'Design Tokens' },
            ],
        },
        {
            id: 'form',
            label: 'Form',
            items: [
                { id: 'radio', path: '/form/radio', icon: '⭕', label: 'Radio' },
                { id: 'input', path: '/form/input', icon: '📝', label: 'Input' },
            ],
        },
    ]

    // Flat list dùng tương thích ngược (nếu cần)
    const navItems = navGroups.flatMap((group) => group.items)

    /**
     * Kiểm tra xem route hiện tại có khớp với path không
     * @param {string} path
     * @returns {boolean}
     */
    function isActive(path) {
        return route.path === path
    }

    /**
     * Kiểm tra xem nhóm có bất kỳ item nào đang active không
     * @param {{ items: Array<{ path: string }> }} group
     * @returns {boolean}
     */
    function isGroupActive(group) {
        return group.items.some((item) => route.path.startsWith(item.path))
    }

    return {
        /** Danh sách các nhóm điều hướng trong sidebar */
        navGroups,
        /** Flat list các mục điều hướng (tương thích ngược) */
        navItems,
        /** Kiểm tra nav item có đang active không */
        isActive,
        /** Kiểm tra nhóm có item active không */
        isGroupActive,
        /** Router instance để điều hướng trang */
        router,
    }
}
