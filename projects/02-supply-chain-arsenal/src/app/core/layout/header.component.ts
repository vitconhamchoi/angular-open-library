import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../auth/auth.store';
import { ShipmentsStore } from '../../store/shipments.store';
import { UserRole, ROLE_PROFILES } from '../../models/role.model';
import { LucideAngularModule, ShieldCheck, Sun, Moon, Anchor, Globe, UserCheck, AlertOctagon } from 'lucide-angular';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header class="header">
      <div class="left-section flex items-center gap-3">
        <div class="live-pulse flex items-center gap-2">
          <span class="pulse-dot"></span>
          <span class="live-text font-bold">ARSENAL LIVE</span>
        </div>
        <div class="metrics-pill flex items-center gap-3">
          <span>🚢 <strong>{{ shipmentsStore.totalTonnage() }}</strong> Tấn hàng</span>
          <span class="divider-dot">•</span>
          <span>💰 <strong>{{ shipmentsStore.totalCargoValue() | currency:'USD':'symbol':'1.0-0' }}</strong></span>
          @if (shipmentsStore.urgentCount() > 0) {
            <span class="divider-dot">•</span>
            <span class="urgent-tag flex items-center gap-1">
              <lucide-icon [img]="AlertIcon" size="14"></lucide-icon>
              {{ shipmentsStore.urgentCount() }} Khẩn cấp
            </span>
          }
        </div>
      </div>

      <div class="right-section flex items-center gap-4">
        <!-- Interactive Role Switcher for Testing RBAC -->
        <div class="role-switcher-box flex items-center gap-2">
          <span class="switcher-label">GIẢ LẬP VAI TRÒ:</span>
          <div class="role-selector flex items-center">
            @for (r of roles; track r) {
              <button
                type="button"
                class="role-btn"
                [class.active]="authStore.currentRole() === r"
                (click)="onSelectRole(r)"
              >
                {{ getRoleTitle(r) }}
              </button>
            }
          </div>
        </div>

        <!-- Current Role Badge -->
        <div class="current-role-badge flex items-center gap-2" [style.border-color]="authStore.roleProfile().badgeColor">
          <lucide-icon [img]="UserIcon" size="16" [color]="authStore.roleProfile().badgeColor"></lucide-icon>
          <div class="flex flex-col">
            <span class="role-title" [style.color]="authStore.roleProfile().badgeColor">
              {{ authStore.roleProfile().title }}
            </span>
            <span class="user-sub">{{ authStore.userName() }}</span>
          </div>
        </div>

        <!-- Dark/Light toggle -->
        <button (click)="toggleTheme()" class="icon-toggle" title="Đổi giao diện">
          <lucide-icon [img]="isDark() ? SunIcon : MoonIcon" size="18"></lucide-icon>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: var(--header-height);
      background: var(--surface-card);
      border-bottom: 1px solid var(--surface-border);
      position: fixed;
      top: 0;
      right: 0;
      left: var(--sidebar-width);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;
      transition: all 0.3s ease;
    }

    .live-pulse {
      background: rgba(2, 132, 199, 0.1);
      border: 1px solid rgba(2, 132, 199, 0.3);
      padding: 4px 10px;
      border-radius: 20px;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #0284c7;
      box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.7);
      animation: pulse-ring 1.8s infinite;
    }

    @keyframes pulse-ring {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(2, 132, 199, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(2, 132, 199, 0); }
    }

    .live-text {
      font-size: 0.7rem;
      color: #0284c7;
      letter-spacing: 0.05em;
    }

    .metrics-pill {
      font-size: 0.8rem;
      color: var(--text-secondary);
      background: var(--surface-ground);
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid var(--surface-border);
    }

    .divider-dot {
      color: var(--surface-border);
    }

    .urgent-tag {
      color: #ef4444;
      font-weight: 600;
    }

    .role-switcher-box {
      background: var(--surface-ground);
      padding: 3px 6px;
      border-radius: 8px;
      border: 1px solid var(--surface-border);
    }

    .switcher-label {
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--text-secondary);
      margin-left: 4px;
    }

    .role-selector {
      gap: 2px;
    }

    .role-btn {
      border: none;
      background: transparent;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
    }

    .role-btn:hover {
      color: var(--text-primary);
    }

    .role-btn.active {
      background: var(--primary-color);
      color: #ffffff;
      box-shadow: 0 1px 3px rgba(2, 132, 199, 0.3);
    }

    .current-role-badge {
      padding: 4px 10px;
      background: var(--surface-ground);
      border: 1px solid;
      border-radius: 8px;
    }

    .role-title {
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.1;
    }

    .user-sub {
      font-size: 0.65rem;
      color: var(--text-secondary);
    }

    .icon-toggle {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--surface-border);
      background: var(--surface-ground);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
    }

    .icon-toggle:hover {
      border-color: var(--primary-color);
    }
  `]
})
export class HeaderComponent {
  readonly authStore = inject(AuthStore);
  readonly shipmentsStore = inject(ShipmentsStore);

  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  readonly UserIcon = UserCheck;
  readonly AlertIcon = AlertOctagon;

  isDark = signal<boolean>(false);

  roles: UserRole[] = ['DIRECTOR', 'DISPATCHER', 'CUSTOMS_OFFICER', 'WAREHOUSE_STAFF'];

  getRoleTitle(role: UserRole): string {
    switch (role) {
      case 'DIRECTOR': return 'Giám Đốc';
      case 'DISPATCHER': return 'Điều Phối';
      case 'CUSTOMS_OFFICER': return 'Hải Quan';
      case 'WAREHOUSE_STAFF': return 'Thủ Kho';
    }
  }

  onSelectRole(role: UserRole) {
    this.authStore.setRole(role);
    const p = ROLE_PROFILES[role];
    toast.info(`Đã đổi vai trò: ${p.title}`, {
      description: p.description
    });
  }

  toggleTheme() {
    this.isDark.update(v => !v);
    if (this.isDark()) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }
}
