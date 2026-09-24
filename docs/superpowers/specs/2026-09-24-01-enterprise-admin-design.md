# Design Document: Project 01 - Enterprise Admin Dashboard

**Date**: 2026-09-24  
**Project**: `projects/01-enterprise-admin`  
**Status**: Approved  
**Author**: Antigravity & User  

---

## 1. Overview & Objectives

Xây dựng dự án mẫu đầu tiên (`01-enterprise-admin`) trong repository `angular-open-library` nhằm minh họa bộ công nghệ (Tech Stack) thực dụng và tối ưu nhất cho ứng dụng web doanh nghiệp trên nền tảng **Angular 19+**.

### Key Deliverables:
1. Dự án Angular hoàn chỉnh tại `projects/01-enterprise-admin`.
2. Tích hợp đầy đủ các thư viện hàng đầu:
   - **UI Component Library**: PrimeNG v19 + `@primeuix/themes` (Aura theme).
   - **State Management**: NgRx SignalStore (`@ngrx/signals`).
   - **Data Visualization**: Apache ECharts + `ngx-echarts`.
   - **Icon System**: `lucide-angular`.
3. Hai phân hệ nghiệp vụ chính:
   - **Dashboard**: Thẻ KPI chỉ số, Biểu đồ Doanh thu đa tháng (Smooth area chart), Danh sách giao dịch mới.
   - **Product Management**: Bảng quản lý sản phẩm PrimeNG với tìm kiếm, lọc danh mục, phân trang, Modal Dialog thêm/sửa, và xóa với thông báo Toast.

---

## 2. Architecture & File Structure

```
projects/01-enterprise-admin/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── layout/
│   │   │   │   ├── main-layout.component.ts     # Shell with Sidebar + Header + RouterOutlet
│   │   │   │   ├── sidebar.component.ts         # Navigation with Lucide icons
│   │   │   │   └── header.component.ts          # Topbar with Search, User profile, Dark toggle
│   │   │   └── mock/
│   │   │       └── initial-data.ts              # Initial mock products and metrics
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts       # KPI cards, ECharts container, Recent activities
│   │   │   │   └── dashboard.component.html
│   │   │   └── products/
│   │   │       ├── products-list.component.ts   # PrimeNG Table, Filter bar, CRUD modal triggers
│   │   │       └── products-list.component.html
│   │   ├── store/
│   │   │   └── products.store.ts                # NgRx SignalStore with State, Computed & Methods
│   │   ├── models/
│   │   │   ├── product.model.ts                 # Product, Category, StockStatus interfaces
│   │   │   └── metric.model.ts                  # MetricCard interface
│   │   ├── app.routes.ts                        # Route definitions with lazy loading
│   │   ├── app.config.ts                        # App providers (PrimeNG, ECharts, Animations)
│   │   └── app.component.ts                     # Root application bootstrap
│   ├── styles.scss                              # Global styles, layout resets, PrimeNG custom tweaks
│   └── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── angular.json
```

---

## 3. Detailed Component & State Design

### 3.1 State Management with NgRx SignalStore (`products.store.ts`)
```typescript
interface ProductsState {
  products: Product[];
  filterSearch: string;
  filterCategory: string;
  selectedProduct: Product | null;
  isLoading: boolean;
}
```
* **Computed signals**:
  - `filteredProducts`: Tự động tính toán lại danh sách sản phẩm khi `products`, `filterSearch` hoặc `filterCategory` thay đổi.
  - `totalProductsCount`: Tổng số lượng sản phẩm.
  - `totalInventoryValue`: Tổng giá trị tồn kho (`price * quantity`).
  - `lowStockCount`: Số sản phẩm sắp hết hàng (`stock <= 10`).
* **Methods**:
  - `setSearch(term: string)`
  - `setCategory(cat: string)`
  - `addProduct(item: Omit<Product, 'id'>)`
  - `updateProduct(id: string, updates: Partial<Product>)`
  - `deleteProduct(id: string)`
  - `setSelectedProduct(product: Product | null)`

### 3.2 UI Design & Theme Configuration
* **PrimeNG Config**:
  - Theme preset: `Aura` từ `@primeuix/themes/aura`.
  - Ripple effect enabled.
  - Toast message service provider (`MessageService`).
  - Confirmation service provider (`ConfirmationService`).
* **Icons**: `lucide-angular` với các icon: `LayoutDashboard`, `Package`, `ShoppingCart`, `TrendingUp`, `Plus`, `Pencil`, `Trash2`, `Search`, `CheckCircle2`, `AlertCircle`.

### 3.3 Data Visualization (`dashboard.component.ts`)
* Sử dụng `ngx-echarts` cùng `echarts/core` (Tree-shaking):
  - Line/Bar series cho dữ liệu doanh thu và chi phí 12 tháng.
  - Tooltip dạng shadow/crosshair.
  - Responsive chart resize khi co giãn sidebar.

---

## 4. Verification & Testing Criteria
1. Dự án build sạch bằng `npm run build` không phát sinh lỗi TypeScript.
2. Ứng dụng chạy mượt qua `npm start` (Angular dev server).
3. Các luồng tương tác hoạt động trơn tru:
   - Chuyển tab giữa Dashboard và Products.
   - Thêm sản phẩm mới cập nhật tức thì lên bảng và tính toán lại KPI tồn kho.
   - Lọc và tìm kiếm phản hồi theo thời gian thực (Signal-driven).
   - Biểu đồ ECharts render sắc nét và tương tác tooltip mượt mà.
