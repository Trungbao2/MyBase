# Contributing to My-UI

Cảm ơn bạn đã quan tâm đến việc đóng góp cho **My-UI**! 🎉

## Quy trình làm việc

Dự án sử dụng mô hình **Git Flow** đơn giản:

```
main        ← production-ready, chỉ merge từ develop qua PR
develop     ← nhánh tích hợp chính
feature/*   ← tính năng mới (tạo từ develop)
fix/*       ← bugfix (tạo từ develop)
```

### Các bước đóng góp

1. **Fork** repo này
2. Tạo nhánh mới từ `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/ten-tinh-nang
   ```
3. Viết code và **viết test** cho thay đổi của bạn
4. Đảm bảo tất cả checks pass:
   ```bash
   npm run lint
   npm run test:run
   ```
5. Commit theo convention (xem bên dưới)
6. Push và tạo **Pull Request** vào nhánh `develop`

## Commit Message Convention

Dự án dùng [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>
```

### Các type phổ biến

| Type | Khi nào dùng |
|---|---|
| `feat` | Thêm tính năng mới |
| `fix` | Sửa bug |
| `docs` | Chỉ thay đổi documentation |
| `style` | Thay đổi format, không ảnh hưởng logic |
| `refactor` | Refactor code, không thêm feat hay fix bug |
| `test` | Thêm hoặc sửa test |
| `chore` | Thay đổi build process, dependencies |

### Ví dụ

```bash
feat(BaseButton): add loading state prop
fix(AppLayout): fix sidebar overflow on mobile
docs(README): update installation guide
test(BaseButton): add test for disabled state
```

## Quy tắc viết code

- Dùng **Composition API** (`<script setup>`)
- Mỗi component nằm trong folder riêng: `src/components/ComponentName/`
- Mỗi component phải có file test: `ComponentName.test.js`
- Dùng **SCSS** cho styles, theo design tokens trong `src/assets/styles/`
- Tên component theo PascalCase, tên file theo camelCase

## Cấu trúc component mới

```
src/components/MyComponent/
├── MyComponent.vue       # Component chính
├── MyComponent.test.js   # Unit tests
└── index.js              # Export
```

## Báo cáo bug

Dùng [Bug Report template](https://github.com/Trungbao2/MyBase/issues/new?template=bug_report.md).

## Đề xuất tính năng

Dùng [Feature Request template](https://github.com/Trungbao2/MyBase/issues/new?template=feature_request.md).

---

Nếu có thắc mắc, hãy tạo issue với label `question`. Cảm ơn! 🙏
