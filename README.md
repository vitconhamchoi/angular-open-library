# 🚀 Awesome Angular Open Libraries & Ecosystem (2025 - 2026)

[![Angular](https://img.shields.io/badge/Angular-v17%20--%20v19+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Signals Ready](https://img.shields.io/badge/Signals-First-0f9d58?style=for-the-badge)](https://angular.dev/guide/signals)
[![Standalone](https://img.shields.io/badge/Standalone-Components-1a73e8?style=for-the-badge)](https://angular.dev/guide/components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

Báo cáo tổng hợp, đánh giá chuyên sâu và tuyển chọn các thư viện mã nguồn mở (Open-Source Libraries) phổ biến, ổn định và tối ưu nhất cho hệ sinh thái **Angular hiện đại**.

Tài liệu được xây dựng nhằm giúp các Tech Lead, Solution Architect và Angular Developer nhanh chóng định hình Tech Stack chuẩn cho dự án doanh nghiệp, tối ưu hiệu năng và bắt kịp các bước chuyển mình lớn của Angular: **Signals, Zoneless, Standalone Components, New Control Flow (`@if`, `@for`), và SSR/Hydration**.

---

## 📑 Mục lục

1. [Tiêu chí đánh giá & Tuyển chọn](#-tiêu-chí-đánh-giá--tuyển-chọn)
2. [Khuyến nghị Tech Stack theo loại hình dự án](#-khuyến-nghị-tech-stack-theo-loại-hình-dự-án)
3. [Chi tiết các hạng mục hàng đầu](#-chi-tiết-các-hạng-mục-hàng-đầu)
   - [1. UI Component Libraries & Design Systems](#1-ui-component-libraries--design-systems)
   - [2. State Management & Data Flow](#2-state-management--data-flow)
   - [3. Data Grids & Heavy Tables](#3-data-grids--heavy-tables)
   - [4. Forms, Dynamic Forms & Validation](#4-forms-dynamic-forms--validation)
   - [5. Charts & Data Visualization](#5-charts--data-visualization)
   - [6. Reactive & Signal Utilities](#6-reactive--signal-utilities)
   - [7. Internationalization (i18n)](#7-internationalization-i18n)
   - [8. Icons & Typography](#8-icons--typography)
   - [9. Testing & Quality Assurance](#9-testing--quality-assurance)
   - [10. Fullstack & Meta-frameworks](#10-fullstack--meta-frameworks)
   - [11. Authentication & Security (OAuth2 / OIDC)](#11-authentication--security-oauth2--oidc)
4. [Xu hướng chuyển dịch công nghệ trong Angular (2025 - 2026)](#-xu-hướng-chuyển-dịch-công-nghệ-trong-angular-2025---2026)
5. [Đóng góp & Giấy phép](#-đóng-góp--giấy-phép)

---

## 🎯 Tiêu chí đánh giá & Tuyển chọn

Mỗi thư viện được đưa vào danh sách này phải thỏa mãn các tiêu chí kiểm duyệt:
* **Hỗ trợ Angular hiện đại**: Tương thích tốt với Angular Standalone Components, Angular Signals, và kiến trúc Zoneless (không phụ thuộc Zone.js).
* **Mức độ hoạt động & Bảo trì**: Tần suất cập nhật phiên bản thường xuyên theo chu kỳ 6 tháng của Angular Core, giải quyết issues tích cực.
* **Cộng đồng & Mức độ tin cậy**: Số lượng GitHub Stars, lượt tải hàng tuần trên npm, được kiểm chứng trong các dự án sản xuất (Production-ready).
* **Hiệu năng & Khả năng Tree-shaking**: Đảm bảo kích thước bundle tối ưu, hỗ trợ ES modules hiện đại.
* **Tài liệu & Trải nghiệm lập trình viên (DX)**: Tài liệu mẫu rõ ràng, hỗ trợ TypeScript chặt chẽ (strict typing).

---

## 🏛 Khuyến nghị Tech Stack theo loại hình dự án

| Loại hình dự án | UI / Design System | State Management | Data Table | Form & Validation |
| :--- | :--- | :--- | :--- | :--- |
| **Enterprise ERP / CRM / Admin** | PrimeNG / Taiga UI | NgRx SignalStore | AG Grid Community | Ngx-Formly + Reactive Forms |
| **SaaS B2B Hiện đại / Startup** | Spartan UI + Tailwind | NgRx SignalStore / TanStack Query | TanStack Table | Reactive Forms + Valibot/Zod |
| **Public Portal / SEO High-Speed** | Angular Material / Tailwind | TanStack Query + Signals | CDK Table | Reactive Forms |
| **Fullstack Web App / SSR** | Spartan UI / PrimeNG | NgRx SignalStore | AG Grid | AnalogJS + Valibot |

---

## 📦 Chi tiết các hạng mục hàng đầu

---

### 1. UI Component Libraries & Design Systems

Giao diện người dùng là nền tảng của mọi ứng dụng web. Một thư viện UI tốt cần hỗ trợ tính dễ tiếp cận (Accessibility - a11y), responsive, và linh hoạt khi tùy biến theme.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Giấy phép | Standalone & Signals | Phong cách UI | Điểm mạnh chính |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[PrimeNG](https://primeng.org/)** 🏆 | ~11.5k | MIT | ✅ Tốt (v18+) | All-in-one, Themeable | Hơn 90+ components, preset Tailwind, hỗ trợ Unstyled mode |
| **[Spartan UI](https://www.spartan.ng/)** 🥈 | ~3.8k | MIT | ✅ Tuyệt đối | Headless + Tailwind (shadcn) | Cực kỳ hiện đại, copy-paste components, tùy biến CSS 100% |
| **[Angular Material](https://material.angular.io/)** | ~24k | MIT | ✅ Tuyệt đối | Material Design 3 | Chuẩn chính thức từ Google, khả năng a11y và độ ổn định cao nhất |
| **[Taiga UI](https://taiga-ui.dev/)** | ~4.5k | Apache 2.0 | ✅ Tuyệt đối | Enterprise, Clean | Kiến trúc module xuất sắc, hỗ trợ Web Components & SSR |
| **[NG-ZORRO](https://ng.ant.design/)** | ~9k | MIT | ✅ Tốt | Ant Design Enterprise | Chuẩn UI Ant Design của Alibaba, rất phổ biến cho hệ thống quản trị |

---

#### 🏆 Top 1 Khuyên dùng: **PrimeNG**

* **Tại sao được chọn**: PrimeNG là thư viện UI phong phú và lâu đời nhất cho Angular. Từ phiên bản 18+, PrimeNG tái cấu trúc toàn diện sang hướng **Signals-first**, hỗ trợ chế độ **Unstyled mode** tích hợp sâu với Tailwind CSS, giúp giải quyết triệt để bài toán khó tùy biến style của các phiên bản trước.
* **Lệnh cài đặt**:
  ```bash
  npm install primeng @primeuix/themes
  ```
* **Ưu điểm**:
  - Hơn 90+ thành phần UI từ cơ bản đến nâng cao (DataTable, Tree, Calendar, MultiSelect, FileUpload).
  - Cung cấp sẵn các theme nổi tiếng: Aura, Lara, Nora, Material.
  - Hỗ trợ cả chế độ Styled truyền thống lẫn Unstyled (Tailwind CSS pass-through).
* **Nhược điểm**:
  - CSS mặc định có thể tương đối nặng nếu không cấu hình tree-shaking và tối ưu bundle kỹ càng.
* **Code ví dụ mẫu (Angular Standalone + PrimeNG)**:
  ```typescript
  import { Component, signal } from '@angular/core';
  import { ButtonModule } from 'primeng/button';
  import { InputTextModule } from 'primeng/inputtext';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [ButtonModule, InputTextModule, FormsModule],
    template: `
      <div class="card flex flex-col gap-3 p-4">
        <label for="username">Tên người dùng</label>
        <input pInputText id="username" [(ngModel)]="username" />
        <p-button label="Lưu thông tin" icon="pi pi-check" (onClick)="onSave()" />
      </div>
    `
  })
  export class UserProfileComponent {
    username = signal<string>('Nguyen Van A');

    onSave() {
      console.log('Saved:', this.username());
    }
  }
  ```

#### 🥈 Các lựa chọn thay thế nổi bật
* **[Spartan UI](https://www.spartan.ng/)**: Dành cho các dự án muốn áp dụng trào lưu **shadcn/ui** vào Angular. Hoạt động trên nền Brain (headless core) kết hợp Helm (Tailwind UI classes), cho phép bạn sở hữu hoàn toàn mã nguồn component mà không bị giới hạn bởi CSS đóng gói của thư viện bên ngoài.
* **[Angular Material](https://material.angular.io/)**: Lựa chọn an toàn tuyệt đối cho các hệ thống doanh nghiệp tuân thủ quy chuẩn Material Design 3 của Google, đảm bảo 100% về khả năng tiếp cận (Accessibility - a11y) và độ mượt khi nâng cấp phiên bản Angular Core.

---

### 2. State Management & Data Flow

Quản lý trạng thái trong Angular đã bước sang kỷ nguyên mới với sự ra đời của **Angular Signals**. Các giải pháp cũ nặng tính boilerplate (như Redux thuần với Actions/Reducers/Effects phức tạp) đang dần nhường chỗ cho các mô hình tinh gọn, phản ứng trực tiếp với Signals.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Giấy phép | Signals Native | Cấp độ phù hợp | Điểm mạnh chính |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[NgRx SignalStore](https://ngrx.io/guide/signals/signal-store)** 🏆 | Part of NgRx (~8k) | MIT | ✅ 100% Bản địa | Feature / Global State | Cực nhẹ, mở rộng qua extension, cú pháp functional, 0 boilerplate |
| **[@tanstack/angular-query](https://tanstack.com/query/latest/docs/framework/angular/overview)** 🥈 | ~45k (Monorepo) | MIT | ✅ Hỗ trợ Signal | Server Cache State | Quản lý state từ API (caching, deduping, refetch, optimistic update) |
| **[NgRx Store (Classic)](https://ngrx.io/)** | ~8k | MIT | ⚠️ Chuyển đổi RxJS | Enterprise Global State | Chuẩn Redux cổ điển cho các hệ thống khổng lồ, công cụ DevTools mạnh |
| **[NGXS](https://www.ngxs.io/)** | ~3.3k | MIT | ⚠️ Hỗ trợ Signals | Feature State | Sử dụng Decorators, cú pháp thân thiện hơn Redux truyền thống |

---

#### 🏆 Top 1 Khuyên dùng: **NgRx SignalStore**

* **Tại sao được chọn**: NgRx SignalStore là giải pháp quản lý state chính thức thế hệ mới của đội ngũ NgRx. Nó kết hợp sức mạnh của Signals với tính mở rộng cao thông qua mô hình hàm kết hợp (`signalStore`, `withState`, `withMethods`, `withComputed`, `withHooks`), loại bỏ hoàn toàn các boilerplate rườm rà của Redux trước đây.
* **Lệnh cài đặt**:
  ```bash
  npm install @ngrx/signals
  ```
* **Ưu điểm**:
  - Không cần Action, Reducer, Effect hay Switch-case cồng kềnh.
  - Tự động cung cấp Signals cho từng thuộc tính state với type-safety 100%.
  - Dễ dàng tạo custom plugins (ví dụ: `withEntities`, `withCallState`, `withStorageSync`).
  - Hỗ trợ cả Local State (inject ở cấp component) và Global State (`providedIn: 'root'`).
* **Nhược điểm**:
  - Khái niệm còn tương đối mới so với các lập trình viên quen dùng RxJS Redux truyền thống.
* **Code ví dụ mẫu (NgRx SignalStore)**:
  ```typescript
  import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
  import { computed, inject } from '@angular/core';

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  interface TodoState {
    todos: Todo[];
    isLoading: boolean;
  }

  const initialState: TodoState = {
    todos: [],
    isLoading: false,
  };

  export const TodoStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ todos }) => ({
      completedCount: computed(() => todos().filter(t => t.completed).length),
      remainingCount: computed(() => todos().filter(t => !t.completed).length),
    })),
    withMethods((store) => ({
      addTodo(title: string) {
        patchState(store, (state) => ({
          todos: [...state.todos, { id: Date.now(), title, completed: false }]
        }));
      },
      toggleTodo(id: number) {
        patchState(store, (state) => ({
          todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
        }));
      }
    }))
  );
  ```

#### 🥈 Các lựa chọn thay thế nổi bật
* **[@tanstack/angular-query](https://tanstack.com/query)**: Đối với 80% ứng dụng thực tế, "state" thực chất chỉ là dữ liệu cache từ máy chủ (Server State). TanStack Query xử lý tự động việc revalidate dữ liệu, tự refetch khi mất mạng, phân trang, và lưu cache mà bạn không cần phải tự viết code quản lý loading/error state.

---

### 3. Data Grids & Heavy Tables

Các ứng dụng doanh nghiệp (ERP, kế toán, quản lý bệnh viện, kho bãi) đòi hỏi khả năng hiển thị hàng trăm ngàn dòng dữ liệu với đầy đủ tính năng: ghim cột, nhóm dữ liệu, tìm kiếm đa điều kiện, xuất Excel.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Giấy phép | Tốc độ kết xuất | Headless / Styled | Tính năng nâng cao |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[AG Grid Community](https://www.ag-grid.com/angular-data-grid/)** 🏆 | ~11k | MIT (Enterprise trả phí) | ⚡ Siêu nhanh (Virtual DOM) | Styled + CSS themes | Đầy đủ nhất thế giới: ảo hóa hàng/cột, ghim, lọc, sort |
| **[@tanstack/angular-table](https://tanstack.com/table/latest/docs/framework/angular/overview)** 🥈 | ~26k (Monorepo) | MIT | ⚡ Rất nhanh | 100% Headless | Tự do dựng HTML/Tailwind, nhẹ, logic table thuần túy |
| **[@angular/cdk/table](https://material.angular.io/cdk/table/overview)** | ~24k (Repo) | MIT | ⚡ Nhanh | Headless / Core CDK | Chuẩn cơ bản của Google, dễ tích hợp với Angular Material |

---

#### 🏆 Top 1 Khuyên dùng: **AG Grid Community**

* **Tại sao được chọn**: AG Grid là "tiêu chuẩn vàng" trong ngành phát triển phần mềm cho bảng dữ liệu lớn. Bản Community (miễn phí, MIT) đã cung cấp đầy đủ các tính năng tối quan trọng: DOM virtualization cho hàng và cột, sorting, filtering, resizing cột, custom cell renderers với hiệu năng render 100,000+ bản ghi cực kỳ mượt mà.
* **Lệnh cài đặt**:
  ```bash
  npm install ag-grid-angular ag-grid-community
  ```
* **Ưu điểm**:
  - Hiệu năng ảo hóa (Virtualization) xử lý hàng trăm ngàn dòng mà không làm đơ trình duyệt.
  - Tích hợp sâu vào Angular qua `AgGridAngular` component.
  - Hệ thống theme hiện đại (`ag-theme-quartz`, `ag-theme-alpine`) hỗ trợ Dark Mode.
* **Nhược điểm**:
  - Gói nâng cao (Pivot table, Master/Detail, Tree Data) đòi hỏi bản Enterprise có phí.
* **Code ví dụ mẫu (AG Grid Standalone)**:
  ```typescript
  import { Component, signal } from '@angular/core';
  import { AgGridAngular } from 'ag-grid-angular';
  import { ColDef } from 'ag-grid-community';

  @Component({
    selector: 'app-grid-example',
    standalone: true,
    imports: [AgGridAngular],
    template: `
      <ag-grid-angular
        style="width: 100%; height: 400px;"
        class="ag-theme-quartz"
        [rowData]="rowData()"
        [columnDefs]="colDefs">
      </ag-grid-angular>
    `
  })
  export class GridExampleComponent {
    rowData = signal([
      { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
      { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    colDefs: ColDef[] = [
      { field: 'make', headerName: 'Hãng xe', filter: true, sortable: true },
      { field: 'model', headerName: 'Dòng xe', filter: true, sortable: true },
      { field: 'price', headerName: 'Giá ($)', valueFormatter: p => '$' + p.value.toLocaleString() },
      { field: 'electric', headerName: 'Xe điện' }
    ];
  }
  ```

#### 🥈 Các lựa chọn thay thế nổi bật
* **[@tanstack/angular-table](https://tanstack.com/table)**: Lựa chọn số 1 nếu bạn muốn thiết kế giao diện bảng hoàn toàn theo phong cách riêng bằng Tailwind CSS mà không phụ thuộc vào bộ khung CSS có sẵn của AG Grid.

---

### 4. Forms, Dynamic Forms & Validation

Form là trái tim của ứng dụng nhập liệu. Bên cạnh **Angular Reactive Forms** đã rất xuất sắc với Typed Forms (từ Angular 14+), việc tạo các biểu mẫu động dựa trên cấu hình JSON (Schema-driven forms) là nhu cầu bức thiết của các dự án lớn.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Giấy phép | Mô hình hoạt động | Điểm mạnh chính |
| :--- | :--- | :--- | :--- | :--- |
| **[@ngx-formly/core](https://formly.dev/)** 🏆 | ~3k | MIT | JSON Schema-driven | Tự động sinh form từ cấu hình JSON/TypeScript, đa UI engine |
| **Angular Reactive Forms** | Core | MIT | Code-driven (Typed) | Tích hợp sẵn, kiểm soát trạng thái form chặt chẽ, type-safe |
| **[Vest](https://vestjs.dev/) / [Valibot](https://valibot.dev/)** 🥈 | ~3k / ~6k | MIT | Schema-based Validation | Xác thực dữ liệu độc lập UI, logic validation viết như test suite |

---

#### 🏆 Top 1 Khuyên dùng: **Ngx-Formly**

* **Tại sao được chọn**: Khi dự án có hàng chục biểu mẫu phức tạp (khai báo hồ sơ, khảo sát, cấu hình tham số hệ thống), việc viết template HTML lặp đi lặp lại rất tốn thời gian. `ngx-formly` cho phép định nghĩa toàn bộ form qua mảng cấu hình JSON, hỗ trợ ẩn/hiện trường có điều kiện, cascade dropdowns, và tích hợp sẵn với Bootstrap, Material, PrimeNG, Tailwind.
* **Lệnh cài đặt (Ví dụ kết hợp với PrimeNG hoặc Material)**:
  ```bash
  npm install @ngx-formly/core @ngx-formly/primeng
  ```
* **Ưu điểm**:
  - Giảm đến 70% lượng code HTML biểu mẫu.
  - Tách bạch hoàn toàn logic cấu hình form và giao diện hiển thị.
  - Dễ dàng lưu schema form vào cơ sở dữ liệu để quản trị viên tự cấu hình form động.
* **Nhược điểm**:
  - Cần học cú pháp cấu hình FormlyFieldConfig ban đầu.
* **Code ví dụ mẫu (Ngx-Formly)**:
  ```typescript
  import { Component } from '@angular/core';
  import { FormGroup, ReactiveFormsModule } from '@angular/forms';
  import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

  @Component({
    selector: 'app-dynamic-form',
    standalone: true,
    imports: [ReactiveFormsModule, FormlyModule],
    template: `
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        <button type="submit">Gửi thông tin</button>
      </form>
    `
  })
  export class DynamicFormComponent {
    form = new FormGroup({});
    model = { email: '', age: 25 };
    fields: FormlyFieldConfig[] = [
      {
        key: 'email',
        type: 'input',
        props: { label: 'Địa chỉ Email', placeholder: 'user@example.com', required: true }
      },
      {
        key: 'age',
        type: 'input',
        props: { type: 'number', label: 'Tuổi', min: 18 }
      }
    ];

    onSubmit() {
      if (this.form.valid) console.log(this.model);
    }
  }
  ```

---

### 5. Charts & Data Visualization

Trực quan hóa dữ liệu trên Dashboard yêu cầu đồ thị phải đẹp, tương tác mượt (zoom, pan, tooltip) và hỗ trợ vẽ mượt hàng chục ngàn điểm dữ liệu.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Engine đồ họa | Hiệu năng tập dữ liệu lớn | Tùy biến biểu đồ |
| :--- | :--- | :--- | :--- | :--- |
| **[ngx-echarts (Apache ECharts)](https://github.com/xieziyu/ngx-echarts)** 🏆 | ~1.5k (ECharts ~60k) | Canvas / SVG | ⚡ Cực tốt (Hàng triệu điểm) | Không giới hạn, bản đồ, 3D, Heatmap |
| **[ng2-charts (Chart.js)](https://valor-software.com/ng2-charts/)** 🥈 | ~2.5k (Chart.js ~65k) | HTML5 Canvas | Tốt (Vừa & nhỏ) | Phù hợp đồ thị thông dụng (Bar, Line, Pie) |
| **[ng-apexcharts (ApexCharts)](https://apexcharts.com/docs/angular-charts/)** | ~1k (ApexCharts ~15k) | SVG | Khá | Giao diện hiện đại, animations đẹp mắt |

---

#### 🏆 Top 1 Khuyên dùng: **ngx-echarts (Apache ECharts)**

* **Tại sao được chọn**: Apache ECharts là một trong những thư viện trực quan hóa dữ liệu mạnh nhất thế giới. `ngx-echarts` cung cấp Angular wrapper xuất sắc, hỗ trợ Canvas lẫn SVG rendering. Đồ thị ECharts có khả năng zoom data brush, hiển thị hàng trăm ngàn điểm dữ liệu realtime mượt mà mà không giật lag.
* **Lệnh cài đặt**:
  ```bash
  npm install echarts ngx-echarts
  ```
* **Ưu điểm**:
  - Hỗ trợ hơn 20+ loại biểu đồ: Line, Bar, Pie, Radar, Scatter, Candlestick (chứng khoán), Heatmap, Treemap, Geo Maps.
  - Tự động resize theo container, tương tác tooltip mượt mà.
  - Khả năng tree-shaking chỉ import các module biểu đồ cần dùng để giảm dung lượng file.
* **Code ví dụ mẫu (ngx-echarts)**:
  ```typescript
  import { Component } from '@angular/core';
  import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { GridComponent, TooltipComponent } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

  @Component({
    selector: 'app-sales-chart',
    standalone: true,
    imports: [NgxEchartsDirective],
    providers: [provideEchartsCore({ echarts })],
    template: `
      <div echarts [options]="chartOptions" class="chart-container" style="height: 350px;"></div>
    `
  })
  export class SalesChartComponent {
    chartOptions = {
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'] },
      yAxis: { type: 'value' },
      series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
    };
  }
  ```

---

### 6. Reactive & Signal Utilities

Kể từ khi Angular ra mắt Signals, cộng đồng đã phát triển các thư viện mở rộng tiện ích giúp kết nối linh hoạt giữa RxJS Observables và Angular Signals.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Tác giả / Cộng đồng | Trọng tâm |
| :--- | :--- | :--- | :--- |
| **[ngxtension](https://ngxtension.netlify.app/)** 🏆 | ~1.4k | Angular Community (Chau Tran & contributors) | Hàng chục Utilities hiện đại cho Signals, DOM, Routing, Forms |
| **[@angular/cdk](https://material.angular.io/cdk/categories)** | ~24k | Google Angular Team | Nền tảng cốt lõi: Drag-drop, Virtual Scroll, Overlay, Clipboard |
| **[@rx-angular/template & state](https://www.rx-angular.io/)** | ~1.3k | RxAngular Team | Tối ưu hóa chu kỳ render, tiền thân của các ý tưởng Zoneless |

---

#### 🏆 Top 1 Khuyên dùng: **ngxtension**

* **Tại sao được chọn**: `ngxtension` được xem như bộ "Lodash" dành riêng cho Angular hiện đại. Thư viện cung cấp các hàm helper cực kỳ thực tế mà Angular Core chưa đóng gói sẵn: `derivedFrom` (kết hợp signals và stream), `injectParams` (lấy route params dạng Signal), `createNotifier`, `injectNetwork`, `injectDocumentVisibility`.
* **Lệnh cài đặt**:
  ```bash
  npm install ngxtension
  ```
* **Ưu điểm**:
  - Hoàn toàn theo chuẩn Functional và `inject()` context.
  - Giảm thiểu code nối giữa RxJS và Signals (`toSignal`, `toObservable`).
  - Tree-shakeable 100%: chỉ đóng gói hàm nào bạn thực sự import.
* **Code ví dụ mẫu (ngxtension)**:
  ```typescript
  import { Component } from '@angular/core';
  import { injectParams } from 'ngxtension/inject-params';

  @Component({
    selector: 'app-product-detail',
    standalone: true,
    template: `
      <h2>Chi tiết sản phẩm ID: {{ productId() }}</h2>
    `
  })
  export class ProductDetailComponent {
    // Tự động lấy param :id từ URL dưới dạng Signal có type-safety!
    readonly productId = injectParams('id');
  }
  ```

---

### 7. Internationalization (i18n)

Đa ngôn ngữ là yêu cầu không thể thiếu đối với các sản phẩm toàn cầu.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Cơ chế | Lazy Load Ngôn ngữ | Đổi ngôn ngữ Runtime | Tương thích SSR |
| :--- | :--- | :--- | :--- | :--- |
| **[@ngneat/transloco](https://ngneat.github.io/transloco/)** 🏆 | Runtime JSON | ✅ Rất linh hoạt | ✅ Tức thì không reload | ✅ Tuyệt vời |
| **[@angular/localize](https://angular.dev/guide/i18n)** | Compile-time / Runtime | ⚠️ Cần build riêng | ❌ Cần reload trang | ✅ Tốt |
| **[@ngx-translate/core](https://github.com/ngx-translate/core)** | Runtime JSON | ✅ Có | ✅ Tức thì | ⚠️ Phụ thuộc config |

---

#### 🏆 Top 1 Khuyên dùng: **Transloco**

* **Tại sao được chọn**: Transloco là thư viện i18n số 1 hiện nay cho Angular, khắc phục triệt để nhược điểm của `@angular/localize` (phải build ra nhiều thư mục ứng dụng tương ứng từng ngôn ngữ) và sự chậm chạp của `ngx-translate`. Transloco hỗ trợ lazy loading tệp bản dịch theo từng tính năng (Scoped Translations), hỗ trợ Pipe, Directive và Service API với Signal support.
* **Lệnh cài đặt**:
  ```bash
  ng add @ngneat/transloco
  ```
* **Ưu điểm**:
  - Hỗ trợ đổi ngôn ngữ trực tiếp tại runtime mà không cần tải lại trang.
  - Phân chia file dịch theo tính năng (Scope translations) giúp tối ưu thời gian tải trang ban đầu.
  - Cung cấp Transloco Keys Manager giúp kiểm tra các key dịch bị thiếu hoặc thừa.

---

### 8. Icons & Typography

Biểu tượng vector giúp giao diện trực quan và chuyên nghiệp. Giải pháp hiện đại đòi hỏi khả năng tree-shaking để người dùng không phải tải cả ngàn icon mà ứng dụng không dùng đến.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Định dạng Icon | Tree-Shaking | Phong cách |
| :--- | :--- | :--- | :--- | :--- |
| **[lucide-angular](https://lucide.dev/guide/packages/lucide-angular)** 🏆 | ~16k (Ecosystem) | Inline SVG Components | ✅ 100% | Hiện đại, tối giản, nét thanh (stroke) |
| **[ng-icons](https://ng-icons.github.io/ng-icons/)** 🥈 | ~1.2k | Meta SVG Icons | ✅ 100% | Đa nguồn: gom Lucide, Heroicons, Tabler, Material trong 1 cú pháp |
| **[@fortawesome/angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)** | ~1.6k | SVG & Font | ✅ Có | Bộ icon kinh điển FontAwesome |

---

#### 🏆 Top 1 Khuyên dùng: **lucide-angular**

* **Tại sao được chọn**: Lucide là phiên bản kế thừa và phát triển vượt trội của Feather Icons. Bộ thư viện `lucide-angular` cung cấp các icon dạng Standalone components, chỉ đóng gói đúng các icon bạn dùng vào bundle sản xuất với kích thước cực nhỏ.
* **Lệnh cài đặt**:
  ```bash
  npm install lucide-angular
  ```
* **Code ví dụ mẫu (lucide-angular)**:
  ```typescript
  import { Component } from '@angular/core';
  import { LucideAngularModule, House, User, Settings } from 'lucide-angular';

  @Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [LucideAngularModule],
    template: `
      <nav class="flex gap-4">
        <lucide-icon [img]="HouseIcon" size="24" color="#1a73e8"></lucide-icon>
        <lucide-icon [img]="UserIcon" size="24"></lucide-icon>
        <lucide-icon [img]="SettingsIcon" size="24"></lucide-icon>
      </nav>
    `
  })
  export class NavbarComponent {
    readonly HouseIcon = House;
    readonly UserIcon = User;
    readonly SettingsIcon = Settings;
  }
  ```

---

### 9. Testing & Quality Assurance

Angular đã chính thức loại bỏ hoàn toàn Karma và Protractor. Hệ thống kiểm thử hiện đại xoay quanh tốc độ của **Vitest / Jest** cho Unit Test và **Playwright** cho End-to-End (E2E) Test.

#### 📊 Bảng so sánh tổng quan

| Công cụ | Loại hình Test | Tốc độ | Khả năng gỡ lỗi (Debugging) | Tích hợp CI/CD |
| :--- | :--- | :--- | :--- | :--- |
| **[Playwright](https://playwright.dev/)** 🏆 | E2E & Component Test | ⚡ Siêu nhanh (Đa luồng) | Trace Viewer, Video, Snapshot | Rất dễ, Docker ready |
| **[Vitest](https://vitest.dev/)** 🥈 | Unit & Integration Test | ⚡ Tốc độ ánh sáng (Vite engine) | Trực tiếp trên VS Code / Terminal | Cực nhanh |
| **[Cypress](https://www.cypress.io/)** | E2E & Component Test | Trung bình | Giao diện UI Test Runner trực quan | Tốt |
| **[Storybook for Angular](https://storybook.js.org/)** | Visual UI & Component Sandbox | - | Cô lập component độc lập | Tốt |

---

#### 🏆 Top 1 Khuyên dùng cho E2E: **Playwright**

* **Tại sao được chọn**: Được phát triển bởi Microsoft, Playwright hỗ trợ chạy test song song trên Chromium, WebKit (Safari), và Firefox với độ tin cậy vượt trội. Tính năng **Auto-waiting** loại bỏ hoàn toàn việc phải thêm các đoạn `sleep()` hoặc chờ đợi phần tử không ổn định.
* **Lệnh cài đặt**:
  ```bash
  npm init playwright@latest
  ```

---

### 10. Fullstack & Meta-frameworks

Angular không chỉ còn là Single Page Application (SPA) truyền thống. Nhu cầu SEO, tối ưu tốc độ tải trang ban đầu (First Contentful Paint) và Server-Side Rendering đã mở đường cho các giải pháp Fullstack.

#### 📊 Bảng so sánh tổng quan

| Giải pháp | Hỗ trợ File-based Routing | Build Tool | Hỗ trợ API Endpoints | Tương thích SSR/SSG |
| :--- | :--- | :--- | :--- | :--- |
| **[AnalogJS](https://analogjs.org/)** 🏆 | ✅ Có (tương tự Next.js/Nuxt) | Vite / Nitro | ✅ Có (server/routes) | ✅ SSR & Static Site (SSG) |
| **@angular/ssr** | ❌ (Dùng Angular Router chuẩn) | esbuild / Vite | ⚠️ Yêu cầu máy chủ Node riêng | ✅ SSR & Prerendering |

---

#### 🏆 Top 1 Khuyên dùng: **AnalogJS**

* **Tại sao được chọn**: AnalogJS được sáng lập bởi Brandon Roberts (thành viên cốt cán của NgRx và cựu thành viên Google Angular team). Đây được mệnh danh là **"Next.js của Angular"**, mang đến trải nghiệm phát triển hiện đại nhất: khởi chạy cực nhanh bằng Vite, định tuyến dựa trên cấu trúc file (File-based Routing), hỗ trợ viết API routes trực tiếp trong cùng một project, và hỗ trợ Markdown blog.
* **Lệnh tạo dự án AnalogJS**:
  ```bash
  npm create analog@latest
  ```

---

### 11. Authentication & Security (OAuth2 / OIDC)

Bảo mật ứng dụng Single Page Application đòi hỏi tuân thủ nghiêm ngặt các tiêu chuẩn của IETF, đặc biệt là việc loại bỏ Implicit Flow lỗi thời để chuyển sang **Authorization Code Flow kết hợp PKCE (Proof Key for Code Exchange)**.

#### 📊 Bảng so sánh tổng quan

| Thư viện | Stars | Chuẩn bảo mật | Nhà cung cấp hỗ trợ |
| :--- | :--- | :--- | :--- |
| **[angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc)** 🏆 | ~1.6k | OAuth 2.0 & OIDC + PKCE | Keycloak, IdentityServer, Okta, Auth0, Google, Azure AD |
| **[@auth0/auth0-angular](https://github.com/auth0/auth0-angular)** | ~500 | Auth0 Native SDK | Chuyên biệt cho nền tảng Auth0 SaaS |

---

#### 🏆 Top 1 Khuyên dùng: **angular-oauth2-oidc**

* **Tại sao được chọn**: Tác giả Manfred Steyer (Google Developer Expert) duy trì thư viện này như một chuẩn mực công nghiệp cho việc kết nối Angular với bất kỳ Identity Provider (IdP) nào hỗ trợ OpenID Connect. Thư viện hỗ trợ tự động làm mới access token ngầm, lưu trữ token an toàn và bảo vệ Router bằng AuthGuard.
* **Lệnh cài đặt**:
  ```bash
  npm install angular-oauth2-oidc
  ```
* **Code cấu hình mẫu**:
  ```typescript
  import { AuthConfig } from 'angular-oauth2-oidc';

  export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://idsvr4.azurewebsites.net',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'spa',
    responseType: 'code',
    scope: 'openid profile email api',
    showDebugInformation: true,
    timeoutFactor: 0.75,
  };
  ```

---

## 🔮 Xu hướng chuyển dịch công nghệ trong Angular (2025 - 2026)

Hệ sinh thái Angular đang trải qua giai đoạn chuyển mình mạnh mẽ nhất kể từ phiên bản Angular 2:

1. **Signals thay thế hoàn toàn Zone.js (Zoneless Angular)**:
   - Các ứng dụng tương lai sẽ không còn cần thư viện monkey-patching `zone.js`. Điều này giúp giảm đáng kể kích thước bundle, cải thiện hiệu năng runtime và đơn giản hóa stack trace khi gỡ lỗi.
2. **Kiến trúc Headless UI + Tailwind CSS bùng nổ**:
   - Thay vì bị trói buộc trong các bộ CSS nguyên khối khó ghi đè, xu hướng lập trình viên chuyển dịch sang các thư viện Headless (Spartan UI, TanStack Table) để toàn quyền định hình phong cách giao diện bằng Tailwind CSS.
3. **Phân chia ranh giới rõ ràng giữa Client State và Server State**:
   - Lập trình viên không còn nhồi nhét tất cả dữ liệu từ API vào Redux store. Thay vào đó, Server State được ủy quyền cho các công cụ chuyên trách như **TanStack Query**, trong khi Client/UI State được giải quyết tinh gọn bằng **NgRx SignalStore**.
4. **Hydration & Event Replay trong SSR**:
   - Với tính năng non-destructive hydration và Event Replay của Angular, các ứng dụng SSR có thể hiển thị nội dung gần như tức thì mà không bị giật nháy màn hình (flicker) và giữ lại toàn bộ tương tác của người dùng trước khi quá trình hydrate hoàn tất.

---

## 🤝 Đóng góp & Giấy phép

Kho tài liệu này được duy trì bởi cộng đồng nhằm cung cấp bức tranh toàn cảnh khách quan và cập nhật nhất về hệ sinh thái Angular mở. 

Mọi đóng góp, đề xuất thư viện mới hoặc cập nhật thông tin phiên bản đều được hoan nghênh nồng nhiệt qua Pull Requests hoặc Issues.

* **Giấy phép**: [MIT License](LICENSE)
* **Bản quyền**: © 2025 - 2026 Angular Open Library Contributors.
