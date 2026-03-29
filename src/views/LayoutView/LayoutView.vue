<script setup>
// LayoutView — Trang demo / tài liệu cho AppLayout component
</script>

<template>
    <div class="page">
        <div class="page-header">
            <h1 class="page-title">AppLayout</h1>
            <p class="page-desc">Layout component với header cố định, sidebar có thể thu nhỏ, và content area linh hoạt.</p>
        </div>

        <div class="demo-grid">
            <div class="demo-card demo-card--full">
                <h3 class="demo-card__title">Slots</h3>
                <div class="demo-card__body">
                    <table class="demo-table">
                        <thead>
                            <tr>
                                <th>Slot</th>
                                <th>Mô tả</th>
                                <th>Slot Props</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>#header</code></td>
                                <td>Nội dung của header bar</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td><code>#sidebar</code></td>
                                <td>Nội dung sidebar</td>
                                <td><code>{ isCollapsed }</code></td>
                            </tr>
                            <tr>
                                <td><code>#default</code></td>
                                <td>Vùng nội dung chính</td>
                                <td>—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="demo-card demo-card--full">
                <h3 class="demo-card__title">Props</h3>
                <div class="demo-card__body">
                    <table class="demo-table">
                        <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Mô tả</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>sidebarWidth</code></td>
                                <td>Number</td>
                                <td>260</td>
                                <td>Chiều rộng sidebar khi mở (px)</td>
                            </tr>
                            <tr>
                                <td><code>sidebarCollapsedWidth</code></td>
                                <td>Number</td>
                                <td>64</td>
                                <td>Chiều rộng sidebar khi thu nhỏ (px)</td>
                            </tr>
                            <tr>
                                <td><code>headerHeight</code></td>
                                <td>Number</td>
                                <td>60</td>
                                <td>Chiều cao header (px)</td>
                            </tr>
                            <tr>
                                <td><code>defaultCollapsed</code></td>
                                <td>Boolean</td>
                                <td>false</td>
                                <td>Sidebar mặc định thu nhỏ</td>
                            </tr>
                        </tbody>
                    </table>
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

.demo-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--font-size-sm);

    th, td {
        padding: var(--spacing-3) var(--spacing-4);
        text-align: left;
        border-bottom: 1px solid var(--color-border);
    }

    th {
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-muted);
        background: var(--color-bg-subtle);
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    td { color: var(--color-text); }

    code {
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
        background: var(--color-bg-subtle);
        padding: 2px 6px;
        border-radius: var(--radius-sm);
        color: var(--color-primary-600);
    }

    tr:last-child td { border-bottom: none; }
}
</style>
