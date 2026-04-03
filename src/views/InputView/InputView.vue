<script setup>
import BaseInput from '@/components/BaseInput/BaseInput.vue'
import BaseSegment from '@/components/BaseSegment/BaseSegment.vue'
import { useInputView } from './useInputView.js'

const {
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
} = useInputView()
</script>

<template>
    <div class="page">
        <!-- ── Header ── -->
        <div class="page-header">
            <div class="page-header__top">
                <div>
                    <h1 class="page-title">BaseInput</h1>
                    <p class="page-desc">
                        Component ô nhập liệu văn bản với nhiều kích thước, trạng thái validate và các slot trang trí (prefix, suffix).
                    </p>
                </div>
                <BaseSegment v-model="activeTab" :items="tabs" />
            </div>
        </div>

        <!-- ── Tab: Ví dụ ── -->
        <template v-if="activeTab === 'examples'">
            <div class="demo-grid">

                <!-- Basic text -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Basic usage</h3>
                    <div class="demo-card__body demo-col">
                        <div class="demo-row">
                            <BaseInput
                                v-model="textValue"
                                label="Họ và tên"
                                placeholder="Nhập họ và tên của bạn..."
                            />
                            <div style="flex: 1;">
                                <p class="demo-hint" style="margin-top: 24px;">
                                    Giá trị v-model: <code>{{ textValue || "Trống" }}</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Clearable Input -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Clearable & Character Count</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-start;">
                        <div class="demo-col" style="flex: 1;">
                            <BaseInput
                                v-model="clearableValue"
                                label="Trường có thể xóa"
                                placeholder="Gõ gì đó để hiện nút xóa..."
                                clearable
                            />
                        </div>
                        <div class="demo-col" style="flex: 1;">
                            <BaseInput
                                v-model="textValue"
                                label="Nhập tối đa 200 ký tự"
                                placeholder="Nhập văn bản..."
                                :maxLength="200"
                                showCount
                            />
                        </div>
                    </div>
                </div>

                <!-- Tag Input -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Tag Input</h3>
                    <div class="demo-card__body demo-col">
                        <div class="demo-row">
                            <BaseInput
                                v-model="tagsValue"
                                tag
                                label="Kỹ năng"
                                placeholder="Gõ rồi bấm phẩy hoặc Enter..."
                                style="flex: 1;"
                            />
                            <div style="flex: 1;">
                                <p class="demo-hint" style="margin-top: 24px;">
                                    Mảng v-model: <code>{{ tagsValue }}</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Input Type -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Input Types</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-start;">
                        <BaseInput
                            v-model="passwordValue"
                            type="password"
                            label="Mật khẩu"
                            placeholder="Nhập mật khẩu"
                            style="flex: 1;"
                        />
                        <BaseInput
                            v-model="numberValue"
                            type="number"
                            label="Số lượng"
                            placeholder="Nhập số"
                            style="flex: 1;"
                        />
                        <BaseInput
                            type="email"
                            label="Email"
                            placeholder="user@example.com"
                            style="flex: 1;"
                        />
                    </div>
                </div>

                <!-- Affixes (Prefix / Suffix) -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Affixes (Prefix & Suffix)</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-start;">
                        <BaseInput label="Tìm kiếm" placeholder="Nhập từ khóa..." style="flex: 1;">
                            <template #prefix>🔍</template>
                        </BaseInput>

                        <BaseInput label="Website" placeholder="example.com" style="flex: 1;">
                            <template #prefix>https://</template>
                        </BaseInput>

                        <BaseInput label="Cân nặng" placeholder="0.00" style="flex: 1;">
                            <template #suffix>kg</template>
                        </BaseInput>
                    </div>
                </div>

                <!-- Validation Status -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Validation Status</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-start;">
                        <BaseInput
                            v-model="validationValues.success"
                            label="Thẻ tín dụng"
                            status="success"
                            message="Số thẻ hợp lệ."
                            style="flex: 1;"
                        />
                        <BaseInput
                            v-model="validationValues.warning"
                            label="Mật khẩu (yếu)"
                            status="warning"
                            message="Mật khẩu quá ngắn."
                            style="flex: 1;"
                        />
                        <BaseInput
                            v-model="validationValues.error"
                            label="Email"
                            status="error"
                            message="Sai định dạng email."
                            style="flex: 1;"
                        />
                    </div>
                </div>

                <!-- Sizes -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Sizes</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-end;">
                        <BaseInput
                            v-model="sizesValues.sm"
                            label="Small Input"
                            placeholder="Size 'sm'"
                            size="sm"
                            style="flex: 1;"
                        >
                            <template #prefix>@</template>
                        </BaseInput>

                        <BaseInput
                            v-model="sizesValues.md"
                            label="Medium Input (Default)"
                            placeholder="Size 'md'"
                            size="md"
                            style="flex: 1;"
                        >
                            <template #prefix>@</template>
                        </BaseInput>

                        <BaseInput
                            v-model="sizesValues.lg"
                            label="Large Input"
                            placeholder="Size 'lg'"
                            size="lg"
                            style="flex: 1;"
                        >
                            <template #prefix>@</template>
                        </BaseInput>
                    </div>
                </div>

                <!-- Disabled / Readonly -->
                <div class="demo-card demo-card--full">
                    <h3 class="demo-card__title">Disabled & Readonly</h3>
                    <div class="demo-card__body demo-row" style="align-items: flex-start;">
                        <BaseInput
                            v-model="disabledValue"
                            label="Disabled State"
                            disabled
                            style="flex: 1;"
                            message="Không thể tương tác."
                        />
                        <BaseInput
                            v-model="disabledValue"
                            label="Readonly State"
                            readonly
                            style="flex: 1;"
                            message="Có thể focus, nhưng không thể nhập."
                        />
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
                        <pre class="doc-code"><code>import BaseInput from '@/components/BaseInput/BaseInput.vue'

// Hoặc qua barrel export
import { BaseInput } from '@/components/BaseInput'</code></pre>
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
                                    <td><code>String | Number</code></td>
                                    <td><code>''</code></td>
                                    <td>Giá trị liên kết <code>v-model</code></td>
                                </tr>
                                <tr>
                                    <td><code>tag</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Bật chế độ Multi-tag input (v-model là mảng chuỗi)</td>
                                </tr>
                                <tr>
                                    <td><code>type</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'text'</code></td>
                                    <td>Các type cho thẻ input (text, number, password, url, email...)</td>
                                </tr>
                                <tr>
                                    <td><code>label</code></td>
                                    <td><code>String</code></td>
                                    <td><code>''</code></td>
                                    <td>Nhãn hiển thị phía trên ô nhập liệu</td>
                                </tr>
                                <tr>
                                    <td><code>placeholder</code></td>
                                    <td><code>String</code></td>
                                    <td><code>''</code></td>
                                    <td>Đoạn text gợi ý khi trống</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Trạng thái vô hiệu hóa</td>
                                </tr>
                                <tr>
                                    <td><code>readonly</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Không cho phép chỉnh sửa</td>
                                </tr>
                                <tr>
                                    <td><code>clearable</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Cho phép xóa nhanh nội dung input (hiển thị nút Xóa khi có text)</td>
                                </tr>
                                <tr>
                                    <td><code>maxLength</code></td>
                                    <td><code>Number | String</code></td>
                                    <td><code>null</code></td>
                                    <td>Giới hạn ký tự tối đa</td>
                                </tr>
                                <tr>
                                    <td><code>showCount</code></td>
                                    <td><code>Boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Hiển thị đếm số ký tự ở góc dưới bên phải</td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'md'</code></td>
                                    <td>Kích thước: <code>sm</code> · <code>md</code> · <code>lg</code></td>
                                </tr>
                                <tr>
                                    <td><code>status</code></td>
                                    <td><code>String</code></td>
                                    <td><code>'normal'</code></td>
                                    <td>Phục vụ validate form: <code>normal</code> · <code>success</code> · <code>warning</code> · <code>error</code></td>
                                </tr>
                                <tr>
                                    <td><code>message</code></td>
                                    <td><code>String</code></td>
                                    <td><code>''</code></td>
                                    <td>Thông báo dưới input (thường dùng chung với lỗi hoặc gợi ý validation)</td>
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
                                    <td><code>String | Number</code></td>
                                    <td>Phát ra giá trị mới — dùng với <code>v-model</code></td>
                                </tr>
                                <tr>
                                    <td><code>change</code></td>
                                    <td><code>Native Event Value</code></td>
                                    <td>Kích hoạt khi value thay đổi và focus được remove</td>
                                </tr>
                                <tr>
                                    <td><code>focus</code> / <code>blur</code></td>
                                    <td><code>Native Event</code></td>
                                    <td>Sự kiện khi input nhận/mất focus</td>
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
                                    <td><code>#prefix</code></td>
                                    <td>Nội dung gắn ở bên trái input (hay dùng icon, chữ https)</td>
                                </tr>
                                <tr>
                                    <td><code>#suffix</code></td>
                                    <td>Nội dung gắn bên phải (đơn vị kg, vnd, mật khẩu hiện ẩn)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
/* Scoped styles copy từ RadioView.vue để giữ cấu trúc doc page nhất quán */
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
    gap: var(--spacing-5);
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
