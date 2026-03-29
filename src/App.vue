<script setup>
import AppLayout from '@/components/AppLayout/AppLayout.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import { useTheme } from '@/composables/useTheme'
import { useAppShell } from '@/composables/useAppShell'
import '@/assets/styles/main.css'

const { isDark, toggleTheme } = useTheme()
const { navGroups, isActive, router } = useAppShell()
</script>

<template>
    <AppLayout :sidebar-width="240" :header-height="60">

        <!-- ─── Header slot ──────────────────────────────────────── -->
        <template #header>
            <div class="header-content">
                <!-- Brand -->
                <div class="header-brand">
                    <span class="header-brand__icon">⚡</span>
                    <span class="header-brand__name">My UI</span>
                    <span class="header-brand__badge">v0.1.0</span>
                </div>

                <!-- Spacer -->
                <div class="header-spacer" />

                <!-- Actions -->
                <div class="header-actions">
                    <BaseButton variant="ghost" size="sm" @click="toggleTheme">
                        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
                    </BaseButton>
                    <a
                        href="https://github.com"
                        target="_blank"
                        class="header-link"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </template>

        <!-- ─── Sidebar slot ─────────────────────────────────────── -->
        <template #sidebar="{ isCollapsed }">
            <nav class="sidebar-nav">
                <!-- Logo khi thu nhỏ -->
                <div class="sidebar-logo" :class="{ 'sidebar-logo--collapsed': isCollapsed }">
                    <span class="sidebar-logo__icon">⚡</span>
                    <span class="sidebar-logo__text">Components</span>
                </div>

                <!-- Nav groups -->
                <div class="sidebar-groups">
                    <div
                        v-for="group in navGroups"
                        :key="group.id"
                        class="sidebar-group"
                    >
                        <span v-if="!isCollapsed" class="sidebar-group__label">
                            {{ group.label }}
                        </span>

                        <button
                            v-for="item in group.items"
                            :key="item.id"
                            class="sidebar-item"
                            :class="{ 'sidebar-item--active': isActive(item.path) }"
                            :title="isCollapsed ? item.label : ''"
                            @click="router.push(item.path)"
                        >
                            <span class="sidebar-item__icon">{{ item.icon }}</span>
                            <span v-if="!isCollapsed" class="sidebar-item__label">{{ item.label }}</span>
                            <span
                                v-if="!isCollapsed && isActive(item.path)"
                                class="sidebar-item__dot"
                            />
                        </button>
                    </div>
                </div>

                <!-- Bottom section -->
                <div class="sidebar-bottom">
                    <div class="sidebar-divider" />
                    <button
                        class="sidebar-item"
                        :title="isCollapsed ? 'Cài đặt' : ''"
                    >
                        <span class="sidebar-item__icon">⚙️</span>
                        <span v-if="!isCollapsed" class="sidebar-item__label">Cài đặt</span>
                    </button>
                </div>
            </nav>
        </template>

        <!-- ─── Default (content) slot — RouterView ──────────────── -->
        <RouterView />

    </AppLayout>
</template>

<style lang="scss" scoped>
// ─── Header slots ─────────────────────────────────────────────────────────────
.header-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    width: 100%;
}

.header-brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);

    &__icon { font-size: var(--font-size-lg); }

    &__name {
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
    }

    &__badge {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
        color: var(--color-primary-600);
        background: var(--color-primary-50);
        padding: 2px var(--spacing-2);
        border-radius: var(--radius-full);
        border: 1px solid var(--color-primary-200);
    }
}

.header-spacer { flex: 1; }

.header-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
}

.header-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-lg);
    color: var(--color-text-muted);
    transition: all var(--transition-fast);

    &:hover {
        background: var(--color-bg-subtle);
        color: var(--color-text);
    }
}

// ─── Sidebar nav ──────────────────────────────────────────────────────────────
.sidebar-nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: var(--spacing-3) 0;
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-2) var(--spacing-4);
    margin-bottom: var(--spacing-2);
    overflow: hidden;

    &__icon { font-size: var(--font-size-xl); flex-shrink: 0; }

    &__text {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        white-space: nowrap;
        opacity: 1;
        transition: opacity var(--transition-normal);
    }

    &--collapsed .sidebar-logo__text {
        opacity: 0;
    }
}

.sidebar-groups {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0;
    flex: 1;
    overflow-y: auto;
}

.sidebar-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    padding: 0 var(--spacing-2);

    &__label {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-subtle);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: var(--spacing-2) var(--spacing-2) var(--spacing-1);
        white-space: nowrap;
    }
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-2) var(--spacing-3);
    border-radius: var(--radius-lg);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
    position: relative;
    transition: all var(--transition-fast);
    cursor: pointer;
    width: 100%;
    text-align: left;

    &__icon {
        font-size: var(--font-size-md);
        flex-shrink: 0;
        width: 20px;
        text-align: center;
    }

    &__label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__dot {
        width: 6px;
        height: 6px;
        border-radius: var(--radius-full);
        background: var(--color-primary-500);
        flex-shrink: 0;
    }

    &:hover {
        background: var(--color-bg-subtle);
        color: var(--color-text);
    }

    &--active {
        background: var(--color-primary-50);
        color: var(--color-primary-700);

        .sidebar-item__icon { filter: none; }
    }
}

.sidebar-bottom {
    padding: 0 var(--spacing-2);
}

.sidebar-divider {
    height: 1px;
    background: var(--color-border);
    margin: var(--spacing-2) var(--spacing-1);
}
</style>
