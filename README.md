# My-UI

<div align="center">

**A modern, lightweight Vue 3 UI Component Library**

[![CI](https://github.com/Trungbao2/MyBase/actions/workflows/ci.yml/badge.svg)](https://github.com/Trungbao2/MyBase/actions/workflows/ci.yml)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/Node-%5E20.19.0-brightgreen)](https://nodejs.org/)

</div>

---

## ✨ Giới thiệu

**My-UI** là thư viện UI component được xây dựng trên nền tảng **Vue 3** + **Vite**, hướng đến việc cung cấp các component gọn nhẹ, dễ tùy biến và nhất quán về design cho các dự án Vue.

## 📦 Components

| Component | Mô tả | Status |
|---|---|---|
| `BaseButton` | Button với nhiều variant, size và trạng thái | ✅ Stable |
| `AppLayout` | Layout wrapper cho toàn bộ ứng dụng | ✅ Stable |

## 🚀 Cài đặt

### Yêu cầu

- Node.js `^20.19.0` hoặc `>=22.12.0`
- Vue `^3.5`

### Clone và chạy local

```bash
# Clone repo
git clone https://github.com/Trungbao2/MyBase.git
cd MyBase

# Cài dependencies
npm install

# Chạy demo app
npm run dev
```

## 🛠️ Scripts

| Script | Mô tả |
|---|---|
| `npm run dev` | Chạy demo app (hot-reload) |
| `npm run build` | Build demo app |
| `npm run build:lib` | Build thư viện (output vào `dist/`) |
| `npm run lint` | Kiểm tra lỗi ESLint |
| `npm run lint:fix` | Tự sửa lỗi ESLint |
| `npm run format` | Format code với Prettier |
| `npm run test` | Chạy tests (watch mode) |
| `npm run test:run` | Chạy tests một lần |
| `npm run test:coverage` | Chạy tests + báo cáo coverage |

## 💡 Sử dụng

### Đăng ký toàn bộ thư viện

```js
import { createApp } from 'vue'
import MyUI from './src/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(MyUI)
app.mount('#app')
```

### Import từng component

```js
import { BaseButton, AppLayout } from './src/index.js'
```

### Sử dụng trong template

```vue
<template>
  <AppLayout>
    <BaseButton variant="primary" size="md" @click="handleClick">
      Click me
    </BaseButton>
  </AppLayout>
</template>
```

## 🧪 Testing

Dự án sử dụng **Vitest** + **@vue/test-utils** để viết unit test.

```bash
# Chạy tất cả tests
npm run test:run

# Chạy với giao diện UI
npm run test:ui

# Xem báo cáo coverage
npm run test:coverage
```

## 🏗️ Cấu trúc dự án

```
my-ui/
├── .github/
│   ├── workflows/
│   │   └── ci.yml          # GitHub Actions CI
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
├── src/
│   ├── assets/
│   │   └── styles/         # Global styles & design tokens
│   ├── components/
│   │   ├── BaseButton/     # Button component
│   │   └── AppLayout/      # Layout component
│   ├── composables/
│   │   └── useTheme.js     # Theme composable
│   └── index.js            # Library entry point
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
```

## 🤝 Đóng góp

Đọc [CONTRIBUTING.md](./CONTRIBUTING.md) để biết cách đóng góp vào dự án.

## 📄 License

[MIT](./LICENSE) © 2026 Trungbao2
