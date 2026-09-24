import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, LayoutDashboard, Package, ShoppingCart, BarChart3, Settings, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">
          <lucide-icon [img]="ShieldIcon" size="24" color="#3b82f6"></lucide-icon>
        </div>
        <div class="brand-text">
          <span class="brand-title">Enterprise Admin</span>
          <span class="brand-badge">v1.0 • Angular 19</span>
        </div>
      </div>

      <nav class="nav-menu">
        <div class="menu-label">TỔNG QUAN</div>
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
          <lucide-icon [img]="DashboardIcon" size="20"></lucide-icon>
          <span>Bảng điều khiển</span>
        </a>

        <div class="menu-label">QUẢN LÝ DOANH NGHIỆP</div>
        <a routerLink="/products" routerLinkActive="active" class="nav-item">
          <lucide-icon [img]="ProductIcon" size="20"></lucide-icon>
          <span>Sản phẩm & Kho hàng</span>
        </a>
        <a href="javascript:void(0)" class="nav-item disabled">
          <lucide-icon [img]="OrderIcon" size="20"></lucide-icon>
          <span>Đơn đặt hàng</span>
          <span class="pill-soon">Sắp có</span>
        </a>
        <a href="javascript:void(0)" class="nav-item disabled">
          <lucide-icon [img]="AnalyticsIcon" size="20"></lucide-icon>
          <span>Báo cáo doanh thu</span>
          <span class="pill-soon">Sắp có</span>
        </a>

        <div class="menu-label">HỆ THỐNG</div>
        <a href="javascript:void(0)" class="nav-item disabled">
          <lucide-icon [img]="SettingsIcon" size="20"></lucide-icon>
          <span>Cấu hình chung</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="tech-pill">
          <span>⚡ Signals + PrimeNG</span>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      height: 100vh;
      background: var(--surface-card);
      border-right: 1px solid var(--surface-border);
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      transition: all 0.3s ease;
    }

    .brand {
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 1.25rem;
      gap: 0.75rem;
      border-bottom: 1px solid var(--surface-border);
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(59, 130, 246, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-title {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--text-primary);
    }

    .brand-badge {
      font-size: 0.7rem;
      color: var(--text-secondary);
    }

    .nav-menu {
      flex: 1;
      padding: 1.25rem 0.75rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .menu-label {
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
      padding: 0.75rem 0.75rem 0.25rem 0.75rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.65rem 0.85rem;
      border-radius: 8px;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .nav-item:hover:not(.disabled) {
      background: var(--surface-hover);
      color: var(--text-primary);
    }

    .nav-item.active {
      background: #eff6ff;
      color: var(--primary-color);
      font-weight: 600;
    }

    :host-context(.dark-mode) .nav-item.active {
      background: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
    }

    .nav-item.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .pill-soon {
      margin-left: auto;
      font-size: 0.65rem;
      background: var(--surface-ground);
      border: 1px solid var(--surface-border);
      padding: 2px 6px;
      border-radius: 12px;
      color: var(--text-secondary);
    }

    .sidebar-footer {
      padding: 1rem;
      border-top: 1px solid var(--surface-border);
    }

    .tech-pill {
      background: var(--surface-ground);
      border: 1px dashed var(--surface-border);
      border-radius: 8px;
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--primary-color);
    }
  `]
})
export class SidebarComponent {
  readonly ShieldIcon = ShieldCheck;
  readonly DashboardIcon = LayoutDashboard;
  readonly ProductIcon = Package;
  readonly OrderIcon = ShoppingCart;
  readonly AnalyticsIcon = BarChart3;
  readonly SettingsIcon = Settings;
}
