<script setup>
import BaseRadio from '@/components/BaseRadio/BaseRadio.vue'
import BaseSegment from '@/components/BaseSegment/BaseSegment.vue'
import { useRadioView } from './useRadioView.js'

const {
    activeTab,
    tabs,
    selectedBasic,
    selectedSize,
    selectedDisabled,
    optionsBasic,
    optionsSizes,
    optionsDisabled,
} = useRadioView()
</script>

<template>
    <div class="page">
        <!-- ── Header ── -->
        <div class="page-header">
            <div class="page-header__top">
                <div>
                    <h1 class="page-title">BaseRadio</h1>
                    <p class="page-desc">
                        Component radio button đơn lẻ hỗ trợ v-model, nhiều kích thước và trạng thái disabled.
                    </p>
                </div>
                <BaseSegment v-model="activeTab" :items="tabs" />
            </div>
        </div>

        <!-- ── Tab: Ví dụ ── -->
        <template v-if="activeTab === 'examples'">
            <div class="demo-grid">

                <!-- Basic -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Basic usage</h3>
                    <div class="demo-card__body demo-col">
                        <div class="demo-row">
                            <BaseRadio
                                v-for="opt in optionsBasic"
                                :key="opt.value"
                                v-model="selectedBasic"
                                :value="opt.value"
                                :label="opt.label"
                            />
                        </div>
                        <p class="demo-hint">
                            Đang chọn: <code>{{ selectedBasic }}</code>
                        </p>
                    </div>
                </div>

                <!-- Custom Color -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Custom Color</h3>
                    <div class="demo-card__body demo-col">
                        <div class="demo-row">
                            <BaseRadio
                                v-model="selectedBasic"
                                value="opt-red"
                                label="Màu Đỏ (Hex)"
                                color="#ef4444"
                            />
                            <BaseRadio
                                v-model="selectedBasic"
                                value="opt-green"
                                label="Màu Xanh (Hex)"
                                color="#10b981"
                            />
                            <BaseRadio
                                v-model="selectedBasic"
                                value="opt-purple"
                                label="Màu Tím (CSS Var)"
                                color="var(--color-primary-600)"
                            />
                        </div>
                    </div>
                </div>

                <!-- Sizes -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Sizes</h3>
                    <div class="demo-card__body demo-col">
                        <BaseRadio
                            v-for="opt in optionsSizes"
                            :key="opt.value"
                            v-model="selectedSize"
                            :value="opt.value"
                            :label="opt.label"
                            :size="opt.value"
                        />
                        <p class="demo-hint">
                            Đang chọn: <code>{{ selectedSize }}</code>
                        </p>
                    </div>
                </div>

                <!-- Disabled -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Disabled</h3>
                    <div class="demo-card__body demo-col">
                        <BaseRadio
                            v-for="opt in optionsDisabled"
                            :key="opt.value"
                            v-model="selectedDisabled"
                            :value="opt.value"
                            :label="opt.label"
                            :disabled="opt.disabled ?? false"
                        />
                    </div>
                </div>

                <!-- Horizontal vs Vertical Layout -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Layout (Ngang & Dọc)</h3>
                    <div class="demo-card__body" style="display: flex; gap: 32px; flex-wrap: wrap;">
                        <!-- Chiều ngang -->
                        <div style="flex: 1; min-width: 250px;">
                            <h4 style="margin-bottom: 12px; font-size: 14px; color: var(--color-text-muted);">1. Xếp Chiều Ngang (.demo-row)</h4>
                            <div class="demo-row">
                                <BaseRadio v-model="selectedBasic" value="option1" label="Một" />
                                <BaseRadio v-model="selectedBasic" value="option2" label="Hai" />
                                <BaseRadio v-model="selectedBasic" value="option3" label="Ba" />
                            </div>
                        </div>

                        <!-- Chiều dọc -->
                        <div style="flex: 1; min-width: 250px;">
                            <h4 style="margin-bottom: 12px; font-size: 14px; color: var(--color-text-muted);">2. Xếp Chiều Dọc (.demo-col)</h4>
                            <div class="demo-col">
                                <BaseRadio v-model="selectedBasic" value="option1" label="Lựa chọn đầu tiên" />
                                <BaseRadio v-model="selectedBasic" value="option2" label="Lựa chọn thứ hai" />
                                <BaseRadio v-model="selectedBasic" value="option3" label="Lựa chọn thứ ba" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Custom slot label -->
                <div class="demo-card">
                    <h3 class="demo-card__title">Custom Label (Slot)</h3>
                    <div class="demo-card__body demo-col">
                        <BaseRadio v-model="selectedBasic" value="option1">
                            <span class="custom-label">
                                <span class="custom-label__icon">🍎</span>
                                <span>
                                    <strong>Táo</strong>
                                    <small>Trái cây ngọt</small>
                                </span>
                            </span>
                        </BaseRadio>
                        <BaseRadio v-model="selectedBasic" value="option2">
                            <span class="custom-label">
                                <span class="custom-label__icon">🍊</span>
                                <span>
                                    <strong>Cam</strong>
                                    <small>Giàu vitamin C</small>
                                </span>
                            </span>
                        </BaseRadio>
                        <BaseRadio v-model="selectedBasic" value="option3">
                            <span class="custom-label">
                                <span class="custom-label__icon">🍇</span>
                                <span>
                                    <strong>Nho</strong>
                                    <small>Ngọt và mọng nước</small>
                                </span>
                            </span>
                        </BaseRadio>
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
                        <pre class="doc-code"><code>import BaseRadio from '@/components/BaseRadio/BaseRadio.vue'

// Hoặc qua barrel export
import { BaseRadio } from '@/components/BaseRadio'</code></pre>
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
                                    <td><code>modelValue</code></td>
                                    <td><code>String | Number | Boolean</code></td>
                                    <td><code>null</code></td>
                                    <td>Giá trị liên kết với <code>v-model</code> của nhóm radio</td>
                                </tr>
                                <tr>
                                    <td><code>value</code></td>
                                    <td><code>String | Number | Boolean</code></td>
                                    <td>—</td>
                                    <td>Giá trị của radio này (bắt buộc)</td>
                                </tr>
                                <tr>
                                    <td><code>label</code></td>
                                    <td><code>String</code></td>
                                    <td><code>''</code></td>
                                    <td>Nhãn hiển thị bên cạnh (có thể dùng slot thay thế)</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Vô hiệu hóa, không cho phép chọn</td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'md'</code></td>
                                    <td>Kích thước: <code>sm</code> · <code>md</code> · <code>lg</code></td>
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
                                    <td><code>update:modelValue</code></td>
                                    <td><code>String | Number | Boolean</code></td>
                                    <td>Phát ra giá trị mới khi người dùng chọn radio — dùng với <code>v-model</code></td>
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
                                    <td>Nội dung custom của nhãn — thay thế prop <code>label</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Cách dùng -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Cách sử dụng</h3>
                    <div class="demo-card__body doc-col">
                        <pre class="doc-code"><code>&lt;!-- Nhóm radio cơ bản --&gt;
&lt;BaseRadio v-model="selected" value="a" label="Option A" /&gt;
&lt;BaseRadio v-model="selected" value="b" label="Option B" /&gt;

&lt;!-- Kích thước --&gt;
&lt;BaseRadio v-model="selected" value="x" size="sm" label="Small" /&gt;
&lt;BaseRadio v-model="selected" value="x" size="md" label="Medium" /&gt;
&lt;BaseRadio v-model="selected" value="x" size="lg" label="Large" /&gt;

&lt;!-- Vô hiệu hóa --&gt;
&lt;BaseRadio v-model="selected" value="y" label="Disabled" :disabled="true" /&gt;

&lt;!-- Custom label qua slot --&gt;
&lt;BaseRadio v-model="selected" value="z"&gt;
    &lt;span&gt;&lt;strong&gt;Custom&lt;/strong&gt; label content&lt;/span&gt;
&lt;/BaseRadio&gt;</code></pre>
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
    max-width: 540px;
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
    gap: var(--spacing-4);
    align-items: center;
}

.demo-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.demo-hint {
    font-size: var(--font-size-xs);
    color: var(--color-text-subtle);

    code {
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
        background: var(--color-bg-subtle);
        padding: 2px 6px;
        border-radius: var(--radius-sm);
        color: var(--color-primary-600);
    }
}

// ─── Custom label slot ─────────────────────────────────────────────────────────
.custom-label {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);

    &__icon { font-size: var(--font-size-xl); }

    span {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    strong {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text);
        line-height: 1.2;
    }

    small {
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
    }
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
