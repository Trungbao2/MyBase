import { useRoute, useRouter } from 'vue-router'

/**
 * useAppShell - Composable quản lý navigation và trạng thái shell của App
 *
 * @returns {{ navItems: Array, isActive: (path: string) => boolean, router: import('vue-router').Router }}
 */
export function useAppShell() {
    const route = useRoute()
    const router = useRouter()

    const navItems = [
        { id: 'buttons', path: '/buttons', icon: '🔘', label: 'BaseButton' },
        { id: 'layout', path: '/layout', icon: '📐', label: 'AppLayout' },
        { id: 'tokens', path: '/tokens', icon: '🎨', label: 'Design Tokens' },
    ]

    /**
     * Kiểm tra xem route hiện tại có khớp với path không
     * @param {string} path
     * @returns {boolean}
     */
    function isActive(path) {
        return route.path === path
    }

    return {
        /** Danh sách các mục điều hướng trong sidebar */
        navItems,
        /** Kiểm tra nav item có đang active không */
        isActive,
        /** Router instance để điều hướng trang */
        router,
    }
}
