# Design Document: Project 02 - Global Supply Chain Command Center

**Date**: 2026-09-24  
**Project**: `projects/02-supply-chain-arsenal`  
**Status**: Approved  
**Author**: Antigravity & User  

---

## 1. Overview & Objectives

Xây dựng dự án số 02 (`02-supply-chain-arsenal`) trong repository `angular-open-library` nhằm thể hiện toàn bộ các **"Vũ Khí Hạng Nặng" (Enterprise Secret Weapons)** của hệ sinh thái Angular trong một bài toán thực tế cao cấp: **Trung Tâm Điều Phối & Giám Sát Chuỗi Cung Ứng Toàn Cầu**.

### Key Deliverables:
1. Dự án Angular hoàn chỉnh tại `projects/02-supply-chain-arsenal`.
2. Tích hợp đầy đủ các thư viện và kỹ thuật tinh túy:
   - **`@angular/cdk/drag-drop`**: Kéo thả điều phối vận đơn, container và lộ trình vận tải với drag-preview & placeholder.
   - **`@angular/cdk/scrolling`**: Ảo hóa DOM (Virtual Scrolling) xử lý mượt mà sổ cái 10,000+ kiện hàng thời gian thực.
   - **`ngx-mask`**: Chuẩn hóa định dạng vận đơn AWB (`000-00000000`), container quốc tế (`AAAA-0000000`), biển số xe và trọng lượng.
   - **Directive-based RBAC (`*appPermission`)**: Phân quyền trực tiếp trên template theo vai trò người dùng (Director, Dispatcher, Customs Officer, Warehouse Staff).
   - **`ngx-sonner`**: Hệ thống thông báo xếp chồng (Stacked Toasts) cao cấp chuẩn modern web.
   - **`@ngrx/signals`**: Quản lý trạng thái tập trung với SignalStore, computed metrics.
   - **`@lucide/angular`**: Hệ thống icon vector nét thanh.
   - **PrimeNG Aura theme & styling**: Layout dark/light hiện đại và responsive.

---

## 2. Architecture & File Structure

```
projects/02-supply-chain-arsenal/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── layout/
│   │   │   │   ├── main-layout.component.ts      # App Shell with Header, Sidebar, Role Switcher
│   │   │   │   ├── header.component.ts           # Header with active Role indicator & stats
│   │   │   │   └── sidebar.component.ts          # Navigation links
│   │   │   ├── auth/
│   │   │   │   ├── permission.directive.ts       # Structural directive *appPermission="['CUSTOMS']"
│   │   │   │   └── auth.store.ts                 # SignalStore for Current User & Role Switching
│   │   │   └── mock/
│   │   │       └── supply-chain-data.ts          # Mock 10,000 shipments generator & initial dispatch board
│   │   ├── features/
│   │   │   ├── dispatch-board/
│   │   │   │   ├── dispatch-board.component.ts   # CDK Drag-and-Drop 4-column logistics board
│   │   │   │   └── dispatch-board.component.html
│   │   │   ├── inventory-ledger/
│   │   │   │   ├── inventory-ledger.component.ts # CDK Virtual Scrolling 10,000+ packages
│   │   │   │   └── inventory-ledger.component.html
│   │   │   └── shipment-intake/
│   │   │       ├── shipment-intake.component.ts  # Form with ngx-mask and validations
│   │   │       └── shipment-intake.component.html
│   │   ├── store/
│   │   │   └── shipments.store.ts                # NgRx SignalStore for shipments & dispatch columns
│   │   ├── models/
│   │   │   ├── shipment.model.ts                 # Shipment, Container, Hub, Status types
│   │   │   └── role.model.ts                     # UserRole, Permission enum
│   │   ├── app.routes.ts                         # Lazy-loaded routes
│   │   ├── app.config.ts                         # CDK, ngx-mask, ngx-sonner, animations providers
│   │   └── app.component.ts                      # Root bootstrap container with <ngx-sonner-toaster />
│   ├── styles.scss
│   └── index.html
├── package.json
└── angular.json
```

---

## 3. Verification & Acceptance Criteria
1. Dự án build sạch bằng `npm run build` không lỗi TypeScript.
2. Khởi chạy dev server mượt mà.
3. Kéo thả kiện hàng giữa các cột trạng thái mượt mà bằng CDK Drag-Drop.
4. Chuyển đổi vai trò người dùng (Role Switcher) ngay trên Header làm các nút đặc quyền (như *Duyệt thông quan*, *Hủy kiện hàng*) ẩn/hiện chính xác.
5. Danh sách 10,000 kiện hàng cuộn mượt mà 60 FPS qua CDK Virtual Scrolling.
6. Form nhập liệu vận đơn áp dụng chính xác các mặt nạ `ngx-mask`.
7. Thông báo hiển thị qua `ngx-sonner` đẹp mắt.
