# Project 02: Global Supply Chain Command Center Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng dự án số 02 `projects/02-supply-chain-arsenal` tích hợp toàn bộ các vũ khí hạng nặng của Angular: CDK Drag-and-Drop, CDK Virtual Scrolling, ngx-mask, ngx-sonner, directive-based RBAC permissions, và NgRx SignalStore trong bài toán chuỗi cung ứng toàn cầu.

**Architecture:** App Shell với Modular Architecture. Tính năng chia theo các domain độc lập (Dispatch Board, Inventory Ledger, Shipment Intake) với 100% Standalone Components, phân quyền bằng Structural Directive và quản lý state tập trung qua NgRx SignalStore.

**Tech Stack:** Angular 19/22, @angular/cdk, ngx-mask, ngx-sonner, @ngrx/signals, @lucide/angular, PrimeNG v19.

## Global Constraints
- Target directory: `d:\Github\angular-open-library\projects\02-supply-chain-arsenal`
- Tất cả components là Standalone.
- Quản lý state thuần Signals.

---

### Task 1: Khởi tạo dự án Angular tại `projects/02-supply-chain-arsenal`

**Files:**
- Create: `projects/02-supply-chain-arsenal/package.json`
- Create: `projects/02-supply-chain-arsenal/angular.json`
- Create: `projects/02-supply-chain-arsenal/src/main.ts`

- [ ] **Step 1: Chạy lệnh Angular CLI**
  `npx @angular/cli new 02-supply-chain-arsenal --directory="projects/02-supply-chain-arsenal" --routing=true --style=scss --ssr=false --skip-git=true --skip-tests=true`
- [ ] **Step 2: Commit mã nguồn khởi tạo**

---

### Task 2: Cài đặt & Cấu hình các thư viện cốt lõi (CDK, ngx-mask, ngx-sonner, PrimeNG, Signals)

**Files:**
- Modify: `projects/02-supply-chain-arsenal/package.json`
- Modify: `projects/02-supply-chain-arsenal/src/app/app.config.ts`
- Modify: `projects/02-supply-chain-arsenal/src/app/app.ts`
- Modify: `projects/02-supply-chain-arsenal/src/styles.scss`

- [ ] **Step 1: Cài đặt dependencies**
  `npm install @angular/cdk ngx-mask ngx-sonner @ngrx/signals @lucide/angular primeng @primeuix/themes @angular/animations primeicons --legacy-peer-deps`
- [ ] **Step 2: Cấu hình `provideEnvironmentNgxMask()` và `providePrimeNG()` trong `app.config.ts`**
- [ ] **Step 3: Thêm `<ngx-sonner-toaster />` vào `app.ts`**
- [ ] **Step 4: Cấu hình theme và layout styles trong `styles.scss`**
- [ ] **Step 5: Test build qua `npm run build`**

---

### Task 3: Xây dựng Models, Mock Data Generator & RBAC Permission System

**Files:**
- Create: `projects/02-supply-chain-arsenal/src/app/models/shipment.model.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/models/role.model.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/core/mock/supply-chain-data.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/core/auth/auth.store.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/core/auth/permission.directive.ts`

- [ ] **Step 1: Khai báo Shipment, Container, Hub, Role interfaces**
- [ ] **Step 2: Tạo hàm sinh 10,000+ kiện hàng mẫu với dữ liệu thực tế**
- [ ] **Step 3: Triển khai AuthStore quản lý User Role (DIRECTOR, DISPATCHER, CUSTOMS_OFFICER, WAREHOUSE_STAFF)**
- [ ] **Step 4: Triển khai `AppPermissionDirective` (`*appPermission="['CUSTOMS_OFFICER']"`)**
- [ ] **Step 5: Triển khai `ShipmentsStore` quản lý trạng thái kiện hàng và 4 cột Kanban**

---

### Task 4: Xây dựng Layout & App Shell với Role Switcher

**Files:**
- Create: `projects/02-supply-chain-arsenal/src/app/core/layout/header.component.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/core/layout/sidebar.component.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/core/layout/main-layout.component.ts`
- Modify: `projects/02-supply-chain-arsenal/src/app/app.routes.ts`

- [ ] **Step 1: Tạo Header có Role Switcher tương tác và badge thống kê**
- [ ] **Step 2: Tạo Sidebar điều hướng (Dispatch Board, Inventory Ledger, Shipment Intake)**
- [ ] **Step 3: Cấu hình App Shell và lazy routes**

---

### Task 5: Triển khai Feature Dispatch Board với CDK Drag-and-Drop

**Files:**
- Create: `projects/02-supply-chain-arsenal/src/app/features/dispatch-board/dispatch-board.component.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/features/dispatch-board/dispatch-board.component.html`
- Create: `projects/02-supply-chain-arsenal/src/app/features/dispatch-board/dispatch-board.component.scss`

- [ ] **Step 1: Cấu hình `cdkDropListGroup` và 4 danh sách `cdkDropList` kết nối liên cột**
- [ ] **Step 2: Xử lý sự kiện `cdkDropListDropped` với di chuyển phần tử mượt mà**
- [ ] **Step 3: Kiểm tra quyền hạn khi kéo thả (Chỉ Customs Officer mới duyệt sang Thông Quan)**
- [ ] **Step 4: Kích hoạt thông báo `toast.success()` / `toast.error()` qua `ngx-sonner`**

---

### Task 6: Triển khai Feature Sổ Cái Ảo Hóa với CDK Virtual Scrolling

**Files:**
- Create: `projects/02-supply-chain-arsenal/src/app/features/inventory-ledger/inventory-ledger.component.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/features/inventory-ledger/inventory-ledger.component.html`
- Create: `projects/02-supply-chain-arsenal/src/app/features/inventory-ledger/inventory-ledger.component.scss`

- [ ] **Step 1: Tích hợp `cdk-virtual-scroll-viewport` với itemSize cố định**
- [ ] **Step 2: Tải và hiển thị danh sách 10,000+ kiện hàng**
- [ ] **Step 3: Thêm ô tìm kiếm và lọc thời gian thực**

---

### Task 7: Triển khai Feature Khai Báo Vận Đơn với `ngx-mask`

**Files:**
- Create: `projects/02-supply-chain-arsenal/src/app/features/shipment-intake/shipment-intake.component.ts`
- Create: `projects/02-supply-chain-arsenal/src/app/features/shipment-intake/shipment-intake.component.html`
- Create: `projects/02-supply-chain-arsenal/src/app/features/shipment-intake/shipment-intake.component.scss`

- [ ] **Step 1: Áp dụng mặt nạ AWB `000-00000000`, Container `AAAA-0000000`, Biển số xe, Trọng lượng**
- [ ] **Step 2: Thêm vận đơn mới trực tiếp vào `ShipmentsStore` và hiển thị toast qua `ngx-sonner`**

---

### Task 8: Nghiệm thu Build, cập nhật README và Push lên Git

- [ ] **Step 1: Kiểm tra build toàn bộ qua `npm run build`**
- [ ] **Step 2: Cập nhật tài liệu root `README.md` giới thiệu Project 02**
- [ ] **Step 3: Commit và Push lên GitHub `origin main`**
