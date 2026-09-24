import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Trello, Layers, FilePlus2, Compass, ShieldAlert, Cpu } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-icon">
          <lucide-icon [img]="CompassIcon" size="24" color="#0284c7"></lucide-icon>
        </div>
        <div class="brand-info">
          <span class="brand-name">Global Supply Chain</span>
          <span class="brand-tag">Project 02 • Enterprise Arsenal</span>
        </div>
      </div>

      <nav class="nav-links">
        <div class="nav-heading">VŨ KHÍ HẠNG NẶNG ANGULAR</div>

        <!-- 1. CDK Drag and Drop -->
        <a routerLink="/dispatch" routerLinkActive="active" class="nav-link">
          <div class="link-icon">
            <lucide-icon [img]="KanbanIcon" size="18"></lucide-icon>
          </div>
          <div class="link-content">
            <span class="link-title">Điều Phối Vận Tải</span>
            <span class="link-desc">CDK Drag-and-Drop & RBAC</span>
          </div>
          <span class="pill-tech">CDK</span>
        </a>

        <!-- 2. CDK Virtual Scroll -->
        <a routerLink="/inventory" routerLinkActive="active" class="nav-link">
          <div class="link-icon">
            <lucide-icon [img]="LayersIcon" size="18"></lucide-icon>
          </div>
          <div class="link-content">
            <span class="link-title">Sổ Cái Kiện Hàng</span>
            <span class="link-desc">CDK 10,000+ Virtual Scroll</span>
          </div>
          <span class="pill-tech blue">10k DOM</span>
        </a>

        <!-- 3. ngx-mask -->
        <a routerLink="/intake" routerLinkActive="active" class="nav-link">
          <div class="link-icon">
            <lucide-icon [img]="FilePlusIcon" size="18"></lucide-icon>
          </div>
          <div class="link-content">
            <span class="link-title">Khai Báo Vận Đơn</span>
            <span class="link-desc">Mặt Nạ Nhập Liệu ngx-mask</span>
          </div>
          <span class="pill-tech purple">Masked</span>
        </a>
      </nav>

      <div class="sidebar-bottom">
        <div class="arsenal-badge flex items-center gap-2">
          <lucide-icon [img]="CpuIcon" size="20" color="#0284c7"></lucide-icon>
          <div class="flex flex-col">
            <span class="arsenal-title">Enterprise Tech Stack</span>
            <span class="arsenal-sub">CDK • Sonner • Mask • Signals</span>
          </div>
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
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      display: flex;
      flex-direction: column;
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

    .brand-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(2, 132, 199, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .brand-name {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .brand-tag {
      font-size: 0.7rem;
      color: var(--text-secondary);
    }

    .nav-links {
      flex: 1;
      padding: 1.25rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      overflow-y: auto;
    }

    .nav-heading {
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
      padding: 0.5rem 0.75rem 0.25rem 0.75rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0.85rem;
      border-radius: 10px;
      text-decoration: none;
      color: var(--text-secondary);
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .nav-link:hover {
      background: var(--surface-hover);
      color: var(--text-primary);
      border-color: var(--surface-border);
    }

    .nav-link.active {
      background: #f0f9ff;
      border-color: #bae6fd;
      color: var(--primary-color);
    }

    :host-context(.dark-mode) .nav-link.active {
      background: rgba(2, 132, 199, 0.15);
      border-color: rgba(2, 132, 199, 0.3);
      color: #38bdf8;
    }

    .link-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link-content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .link-title {
      font-size: 0.85rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .link-desc {
      font-size: 0.68rem;
      opacity: 0.75;
    }

    .pill-tech {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 6px;
      background: #f1f5f9;
      color: #475569;
    }

    .pill-tech.blue {
      background: rgba(2, 132, 199, 0.1);
      color: #0284c7;
    }

    .pill-tech.purple {
      background: rgba(139, 92, 246, 0.1);
      color: #8b5cf6;
    }

    .sidebar-bottom {
      padding: 1rem;
      border-top: 1px solid var(--surface-border);
    }

    .arsenal-badge {
      background: var(--surface-ground);
      padding: 0.65rem;
      border-radius: 8px;
      border: 1px dashed var(--surface-border);
    }

    .arsenal-title {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .arsenal-sub {
      font-size: 0.65rem;
      color: var(--text-secondary);
    }
  `]
})
export class SidebarComponent {
  readonly CompassIcon = Compass;
  readonly KanbanIcon = Trello;
  readonly LayersIcon = Layers;
  readonly FilePlusIcon = FilePlus2;
  readonly CpuIcon = Cpu;
}
