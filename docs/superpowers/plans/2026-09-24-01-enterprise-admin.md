# Project 01: Enterprise Admin Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng dự án mẫu số 01 `projects/01-enterprise-admin` theo kiến trúc Angular 19+ hiện đại, minh họa bộ công nghệ thực dụng: PrimeNG v19, NgRx SignalStore, Lucide Angular, và ECharts.

**Architecture:** Ứng dụng quản trị dạng App Shell với Layout Sidebar/Header cố định. Tính năng phân theo module chức năng (Dashboard, Products) với 100% Standalone Components, quản lý state hoàn toàn bằng NgRx SignalStore (`@ngrx/signals`) và giao tiếp hai chiều qua Angular Signals.

**Tech Stack:** Angular 19+, PrimeNG v19 (@primeuix/themes Aura), @ngrx/signals, lucide-angular, echarts + ngx-echarts.

## Global Constraints
- Target directory: `d:\Github\angular-open-library\projects\01-enterprise-admin`
- Tất cả components phải là Standalone Components (`standalone: true` hoặc mặc định Angular 19).
- Quản lý state theo mô hình Signals-first, không dùng RxJS cho local UI state trừ khi kết nối stream bất đồng bộ.
- Theme: PrimeNG Aura preset với responsive layout.

---

### Task 1: Khởi tạo dự án Angular tại `projects/01-enterprise-admin`

**Files:**
- Create: `projects/01-enterprise-admin/package.json`
- Create: `projects/01-enterprise-admin/angular.json`
- Create: `projects/01-enterprise-admin/tsconfig.json`
- Create: `projects/01-enterprise-admin/src/index.html`
- Create: `projects/01-enterprise-admin/src/main.ts`

- [ ] **Step 1: Chạy lệnh khởi tạo Angular CLI**
  Chạy lệnh `npx @angular/cli@latest new 01-enterprise-admin --directory=projects/01-enterprise-admin --routing --style=scss --ssr=false --skip-git --skip-tests --inline-style=false`
- [ ] **Step 2: Kiểm tra cấu trúc thư mục sau khi tạo**
  Xác minh thư mục `projects/01-enterprise-admin/src/app` đã được sinh ra đầy đủ.
- [ ] **Step 3: Commit code khởi tạo**
  `git add projects/01-enterprise-admin`
  `git commit -m "chore: scaffold 01-enterprise-admin angular project"`

---

### Task 2: Cài đặt & Cấu hình các thư viện cốt lõi (PrimeNG, NgRx Signals, Lucide, ECharts)

**Files:**
- Modify: `projects/01-enterprise-admin/package.json`
- Modify: `projects/01-enterprise-admin/src/app/app.config.ts`
- Modify: `projects/01-enterprise-admin/src/styles.scss`

- [ ] **Step 1: Cài đặt dependencies**
  Trong thư mục `projects/01-enterprise-admin/`:
  `npm install primeng @primeuix/themes @ngrx/signals lucide-angular echarts ngx-echarts @angular/animations primeicons`
- [ ] **Step 2: Cấu hình `app.config.ts` với PrimeNG Aura và ECharts**
  Khai báo `providePrimeNG({ theme: { preset: Aura } })` và `provideAnimations()`.
- [ ] **Step 3: Cấu hình `styles.scss`**
  Import theme và định nghĩa các lớp utility cho flex layout, dashboard grid, typography.
- [ ] **Step 4: Kiểm tra build cơ bản**
  `npm run build` để đảm bảo các package cài đặt không xung đột type.
- [ ] **Step 5: Commit dependencies**
  `git commit -am "feat: configure PrimeNG, NgRx Signals, Lucide, and ECharts"`

---

### Task 3: Xây dựng Core Models, Mock Data & App Shell Layout

**Files:**
- Create: `projects/01-enterprise-admin/src/app/models/product.model.ts`
- Create: `projects/01-enterprise-admin/src/app/models/metric.model.ts`
- Create: `projects/01-enterprise-admin/src/app/core/mock/initial-data.ts`
- Create: `projects/01-enterprise-admin/src/app/core/layout/sidebar.component.ts`
- Create: `projects/01-enterprise-admin/src/app/core/layout/header.component.ts`
- Create: `projects/01-enterprise-admin/src/app/core/layout/main-layout.component.ts`
- Modify: `projects/01-enterprise-admin/src/app/app.routes.ts`

- [ ] **Step 1: Tạo các interface dữ liệu (Product, Metric, Category)**
- [ ] **Step 2: Tạo bộ dữ liệu khởi tạo ban đầu (initial-data.ts)**
- [ ] **Step 3: Tạo SidebarComponent sử dụng Lucide Icons (Dashboard, Products, Orders, Settings)**
- [ ] **Step 4: Tạo HeaderComponent với ô tìm kiếm nhanh, icon thông báo, profile admin**
- [ ] **Step 5: Tạo MainLayoutComponent kết nối Sidebar + Header + `<router-outlet>`**
- [ ] **Step 6: Cấu hình `app.routes.ts` điều hướng đến Dashboard và Products**
- [ ] **Step 7: Commit App Shell**
  `git commit -am "feat: implement models, mock data, and app shell layout"`

---

### Task 4: Triển khai Quản lý Trạng thái với NgRx SignalStore

**Files:**
- Create: `projects/01-enterprise-admin/src/app/store/products.store.ts`

- [ ] **Step 1: Định nghĩa ProductsState interface**
- [ ] **Step 2: Triển khai signalStore với initial state từ mock data**
- [ ] **Step 3: Thêm computed signals (`filteredProducts`, `totalInventoryValue`, `lowStockCount`, `categoryStats`)**
- [ ] **Step 4: Thêm methods (`setSearchTerm`, `setCategory`, `addProduct`, `updateProduct`, `deleteProduct`)**
- [ ] **Step 5: Commit Store**
  `git commit -am "feat: implement ProductsStore using NgRx SignalStore"`

---

### Task 5: Triển khai Phân hệ Dashboard (KPI Metrics + ECharts Analytics)

**Files:**
- Create: `projects/01-enterprise-admin/src/app/features/dashboard/dashboard.component.ts`
- Create: `projects/01-enterprise-admin/src/app/features/dashboard/dashboard.component.html`
- Create: `projects/01-enterprise-admin/src/app/features/dashboard/dashboard.component.scss`

- [ ] **Step 1: Tạo thẻ KPI Cards liên kết trực tiếp với Signals từ Store**
- [ ] **Step 2: Tích hợp `ngx-echarts` vẽ biểu đồ doanh thu 12 tháng**
- [ ] **Step 3: Tạo bảng tóm tắt hoạt động & đơn hàng mới**
- [ ] **Step 4: Commit Dashboard**
  `git commit -am "feat: implement Dashboard with KPI cards and ECharts"`

---

### Task 6: Triển khai Phân hệ Quản lý Sản phẩm (PrimeNG Data Table + CRUD Modal)

**Files:**
- Create: `projects/01-enterprise-admin/src/app/features/products/products-list.component.ts`
- Create: `projects/01-enterprise-admin/src/app/features/products/products-list.component.html`
- Create: `projects/01-enterprise-admin/src/app/features/products/products-list.component.scss`

- [ ] **Step 1: Tạo bảng dữ liệu PrimeNG Table với phân trang, sắp xếp và lọc**
- [ ] **Step 2: Thêm thanh tìm kiếm và bộ lọc danh mục liên kết với SignalStore**
- [ ] **Step 3: Tạo Modal Dialog PrimeNG để Thêm/Sửa sản phẩm với form validation**
- [ ] **Step 4: Tích hợp ConfirmationService & MessageService (Toast) khi xóa sản phẩm**
- [ ] **Step 5: Commit Products Feature**
  `git commit -am "feat: implement Product management with PrimeNG table and CRUD dialog"`

---

### Task 7: Build nghiệm thu, cập nhật tài liệu & Push lên Git

**Files:**
- Modify: `README.md` (Bổ sung phần giới thiệu và hướng dẫn chạy Project 01)
- Test: Build toàn bộ ứng dụng qua `npm run build`

- [ ] **Step 1: Chạy `npm run build` trong `projects/01-enterprise-admin` và kiểm tra lỗi**
- [ ] **Step 2: Cập nhật README.md ở thư mục gốc để hướng dẫn chạy `01-enterprise-admin`**
- [ ] **Step 3: Commit và Push lên nhánh `main` trên GitHub repository**
  `git push origin main`
