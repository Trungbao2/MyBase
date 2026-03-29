<script setup>
// TokensView — Trang demo / tài liệu cho Design Tokens
</script>

<template>
    <div class="page">
        <div class="page-header">
            <h1 class="page-title">Design Tokens</h1>
            <p class="page-desc">Các biến CSS dùng chung để đảm bảo tính nhất quán trong toàn bộ hệ thống.</p>
        </div>

        <div class="demo-grid">
            <!-- Colors — Primary -->
            <div class="demo-card demo-card--full">
                <h3 class="demo-card__title">Colors — Primary</h3>
                <div class="demo-card__body">
                    <div class="color-palette">
                        <div
                            v-for="n in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]"
                            :key="n"
                            class="color-swatch"
                        >
                            <div class="color-swatch__box" :style="{ background: `var(--color-primary-${n})` }" />
                            <span class="color-swatch__label">{{ n }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Colors — Neutral -->
            <div class="demo-card demo-card--full">
                <h3 class="demo-card__title">Colors — Neutral</h3>
                <div class="demo-card__body">
                    <div class="color-palette">
                        <div
                            v-for="n in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]"
                            :key="n"
                            class="color-swatch"
                        >
                            <div class="color-swatch__box" :style="{ background: `var(--color-neutral-${n})` }" />
                            <span class="color-swatch__label">{{ n }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page { display: flex; flex-direction: column; gap: var(--spacing-6); }

.page-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.page-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
}

.page-desc {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    line-height: var(--line-height-relaxed);
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-4);
}

.demo-card {
    background: var(--color-bg-muted);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    overflow: hidden;

    &--full { grid-column: 1 / -1; }

    &__title {
        padding: var(--spacing-4) var(--spacing-5);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
    }

    &__body { padding: var(--spacing-5); }
}

.color-palette {
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
}

.color-swatch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-1);

    &__box {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);
    }

    &__label {
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
        font-weight: var(--font-weight-medium);
    }
}
</style>
