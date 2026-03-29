<script setup>
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseSegment from '@/components/BaseSegment/BaseSegment.vue'
import { useButtonsView } from './useButtonsView.js'

const { activeTab, tabs, loading, simulateLoading } = useButtonsView()
</script>

<template>
    <div class="page">
        <div class="page-header">
            <div class="page-header__top">
                <div>
                    <h1 class="page-title">BaseButton</h1>
                    <p class="page-desc">Component button linh hoạt với nhiều biến thể, kích thước và trạng thái.</p>
                </div>
                <BaseSegment v-model="activeTab" :items="tabs" />
            </div>
        </div>

        <!-- ── Tab: Ví dụ ── -->
        <template v-if="activeTab === 'examples'">
            <div class="demo-grid">

                <!-- ── Basic usage ── -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Basic usage</h3>
                    <div class="demo-card__body demo-col">

                        <!-- Solid row -->
                        <div class="demo-row demo-row--center">
                            <BaseButton variant="default">Default</BaseButton>
                            <BaseButton variant="primary">Primary</BaseButton>
                            <BaseButton variant="success">Success</BaseButton>
                            <BaseButton variant="info">Info</BaseButton>
                            <BaseButton variant="warning">Warning</BaseButton>
                            <BaseButton variant="danger">Danger</BaseButton>
                        </div>

                        <!-- Plain row -->
                        <div class="demo-row demo-row--center">
                            <BaseButton variant="default" plain>Plain</BaseButton>
                            <BaseButton variant="primary" plain>Primary</BaseButton>
                            <BaseButton variant="success" plain>Success</BaseButton>
                            <BaseButton variant="info" plain>Info</BaseButton>
                            <BaseButton variant="warning" plain>Warning</BaseButton>
                            <BaseButton variant="danger" plain>Danger</BaseButton>
                        </div>

                        <!-- Round row -->
                        <div class="demo-row demo-row--center">
                            <BaseButton variant="default" round>Round</BaseButton>
                            <BaseButton variant="primary" round>Primary</BaseButton>
                            <BaseButton variant="success" round>Success</BaseButton>
                            <BaseButton variant="info" round>Info</BaseButton>
                            <BaseButton variant="warning" round>Warning</BaseButton>
                            <BaseButton variant="danger" round>Danger</BaseButton>
                        </div>

                        <!-- Circle icon row -->
                        <div class="demo-row demo-row--center">
                            <!-- Search -->
                            <BaseButton variant="default" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            </BaseButton>
                            <!-- Edit -->
                            <BaseButton variant="primary" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                            </BaseButton>
                            <!-- Check -->
                            <BaseButton variant="success" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                            </BaseButton>
                            <!-- Message -->
                            <BaseButton variant="info" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            </BaseButton>
                            <!-- Star -->
                            <BaseButton variant="warning" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </BaseButton>
                            <!-- Delete -->
                            <BaseButton variant="danger" circle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                            </BaseButton>
                        </div>

                    </div>
                </div>

                <!-- ── Sizes ── -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Sizes</h3>
                    <div class="demo-card__body demo-row demo-row--center">
                        <BaseButton variant="primary" size="sm">Small</BaseButton>
                        <BaseButton variant="primary" size="md">Medium</BaseButton>
                        <BaseButton variant="primary" size="lg">Large</BaseButton>
                    </div>
                </div>

                <!-- ── States ── -->
                <div class="demo-card">
                    <h3 class="demo-card__title">States</h3>
                    <div class="demo-card__body demo-row">
                        <BaseButton variant="default" :disabled="true">Disabled</BaseButton>
                        <BaseButton variant="primary" :disabled="true">Disabled</BaseButton>
                        <BaseButton variant="primary" :loading="loading" @click="simulateLoading">
                            {{ loading ? 'Loading…' : 'Click to Load' }}
                        </BaseButton>
                    </div>
                </div>

                <!-- ── Block ── -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Block</h3>
                    <div class="demo-card__body demo-col" style="gap: var(--spacing-2)">
                        <BaseButton :block="true" variant="primary">Primary Block</BaseButton>
                        <BaseButton :block="true" variant="success">Success Block</BaseButton>
                    </div>
                </div>

                <!-- ── Icon + Text ── -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Icon + Text</h3>
                    <div class="demo-card__body demo-row demo-row--center">
                        <BaseButton variant="primary">
                            <template #icon-left>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            </template>
                            Search
                        </BaseButton>
                        <BaseButton variant="success">
                            <template #icon-left>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                            </template>
                            Confirm
                        </BaseButton>
                        <BaseButton variant="danger">
                            <template #icon-left>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                            </template>
                            Delete
                        </BaseButton>
                    </div>
                </div>

            </div>
        </template>

        <!-- ── Tab: Tài liệu ── -->
        <template v-else-if="activeTab === 'docs'">
            <div class="demo-grid">

                <!-- Import -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Import</h3>
                    <div class="demo-card__body">
                        <pre class="doc-code"><code>import BaseButton from '@/components/BaseButton/BaseButton.vue'

// Hoặc qua barrel export
import { BaseButton } from '@/components/BaseButton'</code></pre>
                    </div>
                </div>

                <!-- Props -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Props</h3>
                    <div class="demo-card__body">
                        <table class="doc-table">
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
                                    <td><code>variant</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'default'</code></td>
                                    <td>Kiểu màu sắc: <code>default</code> · <code>primary</code> · <code>success</code> · <code>info</code> · <code>warning</code> · <code>danger</code> · <code>secondary</code> · <code>outline</code> · <code>ghost</code></td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'md'</code></td>
                                    <td>Kích thước: <code>sm</code> · <code>md</code> · <code>lg</code></td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Vô hiệu hóa button, không cho phép click</td>
                                </tr>
                                <tr>
                                    <td><code>loading</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Hiển thị spinner và khóa tương tác</td>
                                </tr>
                                <tr>
                                    <td><code>block</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Chiếm toàn bộ chiều rộng của container</td>
                                </tr>
                                <tr>
                                    <td><code>plain</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Kiểu nền nhạt, chữ và viền có màu theo variant</td>
                                </tr>
                                <tr>
                                    <td><code>round</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Bo tròn hoàn toàn (pill shape)</td>
                                </tr>
                                <tr>
                                    <td><code>circle</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Hình tròn — dùng cho icon-only button</td>
                                </tr>
                                <tr>
                                    <td><code>type</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'button'</code></td>
                                    <td>HTML type attribute: <code>button</code> · <code>submit</code> · <code>reset</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Events -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Events</h3>
                    <div class="demo-card__body">
                        <table class="doc-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Payload</th>
                                    <th>Mô tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>click</code></td>
                                    <td><code>MouseEvent</code></td>
                                    <td>Phát ra khi click — bị chặn khi <code>disabled</code> hoặc <code>loading</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Slots -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Slots</h3>
                    <div class="demo-card__body">
                        <table class="doc-table">
                            <thead>
                                <tr>
                                    <th>Slot</th>
                                    <th>Mô tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>#default</code></td>
                                    <td>Nội dung văn bản của button</td>
                                </tr>
                                <tr>
                                    <td><code>#icon-left</code></td>
                                    <td>Icon hiển thị bên trái nội dung (ẩn khi <code>loading</code>)</td>
                                </tr>
                                <tr>
                                    <td><code>#icon-right</code></td>
                                    <td>Icon hiển thị bên phải nội dung</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Usage example -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Cách sử dụng</h3>
                    <div class="demo-card__body doc-col">
                        <pre class="doc-code"><code>&lt;!-- Cơ bản --&gt;
&lt;BaseButton variant="primary"&gt;Lưu&lt;/BaseButton&gt;

&lt;!-- Với icon bên trái --&gt;
&lt;BaseButton variant="success"&gt;
    &lt;template #icon-left&gt;
        &lt;svg ...&gt;...&lt;/svg&gt;
    &lt;/template&gt;
    Xác nhận
&lt;/BaseButton&gt;

&lt;!-- Loading state --&gt;
&lt;BaseButton variant="primary" :loading="isLoading" @click="handleSave"&gt;
    {{ isLoading ? 'Đang lưu…' : 'Lưu' }}
&lt;/BaseButton&gt;

&lt;!-- Icon-only circle --&gt;
&lt;BaseButton variant="danger" circle&gt;
    &lt;svg ...&gt;...&lt;/svg&gt;
&lt;/BaseButton&gt;

&lt;!-- Block full-width --&gt;
&lt;BaseButton variant="primary" block&gt;Đăng nhập&lt;/BaseButton&gt;</code></pre>
                    </div>
                </div>

            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.page { display: flex; flex-direction: column; gap: var(--spacing-6); }

.page-header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}

.page-header__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-4);
    flex-wrap: wrap;
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
    margin-top: var(--spacing-1);
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

.demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-3);

    &--center { align-items: center; }
}

.demo-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}

// ─── Doc styles ───────────────────────────────────────────────────────────────
.doc-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}

.doc-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--font-size-sm);

    th, td {
        padding: var(--spacing-3) var(--spacing-4);
        text-align: left;
        border-bottom: 1px solid var(--color-border);
        vertical-align: top;
    }

    th {
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-muted);
        background: var(--color-bg-subtle);
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    td { color: var(--color-text); line-height: var(--line-height-relaxed); }

    code {
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
        background: var(--color-bg-subtle);
        padding: 2px 6px;
        border-radius: var(--radius-sm);
        color: var(--color-primary-600);
        white-space: nowrap;
    }

    tr:last-child td { border-bottom: none; }
}

.doc-code {
    margin: 0;
    padding: var(--spacing-4) var(--spacing-5);
    background: var(--color-bg-subtle);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    overflow-x: auto;
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-text);

    code { background: none; padding: 0; border-radius: 0; }
}
</style>
