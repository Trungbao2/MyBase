import { ref, computed, provide } from 'vue'

/**
 * useAppLayoutState - Composable quản lý toàn bộ state nội bộ của AppLayout component
 *
 * @param {object} props - Props của AppLayout component
 * @param {Function} emit - Hàm emit của AppLayout component
 */
export function useAppLayoutState(props, emit) {
    // ─── State ────────────────────────────────────────────────────────────────
    const isCollapsed = ref(props.defaultCollapsed)
    const isMobileOpen = ref(false)

    // ─── Computed ─────────────────────────────────────────────────────────────
    const currentSidebarWidth = computed(() =>
        isCollapsed.value ? props.sidebarCollapsedWidth : props.sidebarWidth
    )

    const cssVars = computed(() => ({
        '--layout-header-height': `${props.headerHeight}px`,
        '--layout-sidebar-width': `${props.sidebarWidth}px`,
        '--layout-sidebar-collapsed-width': `${props.sidebarCollapsedWidth}px`,
        '--layout-sidebar-current-width': `${currentSidebarWidth.value}px`,
    }))

    // ─── Methods ──────────────────────────────────────────────────────────────
    function toggleSidebar() {
        isCollapsed.value = !isCollapsed.value
        emit('sidebar-toggle', isCollapsed.value)
    }

    function toggleMobile() {
        isMobileOpen.value = !isMobileOpen.value
    }

    function closeMobile() {
        isMobileOpen.value = false
    }

    // ─── Provide to children ──────────────────────────────────────────────────
    provide('layout', {
        isCollapsed,
        isMobileOpen,
        toggleSidebar,
        toggleMobile,
        closeMobile,
    })

    return {
        /** Trạng thái sidebar có đang thu nhỏ không */
        isCollapsed,
        /** Trạng thái sidebar mobile có đang mở không */
        isMobileOpen,
        /** CSS variables dùng để bind vào style */
        cssVars,
        /** Toggle thu nhỏ/mở rộng sidebar */
        toggleSidebar,
        /** Toggle sidebar trên mobile */
        toggleMobile,
        /** Đóng sidebar trên mobile */
        closeMobile,
    }
}
