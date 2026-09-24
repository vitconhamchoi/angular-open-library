import { Component, signal } from '@angular/core';
import { LucideAngularModule, Search, Bell, Sun, Moon } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, ButtonModule, InputTextModule],
  template: `
    <header class="header">
      <div class="search-box">
        <lucide-icon [img]="SearchIcon" size="18" class="search-icon"></lucide-icon>
        <input
          type="text"
          placeholder="Tìm kiếm chức năng, dữ liệu (Ctrl + K)..."
          class="search-input"
        />
      </div>

      <div class="header-actions">
        <!-- Dark / Light mode toggle -->
        <button (click)="toggleDarkMode()" class="icon-btn" [title]="isDark() ? 'Chuyển sang Giao diện Sáng' : 'Chuyển sang Giao diện Tối'">
          <lucide-icon [img]="isDark() ? SunIcon : MoonIcon" size="20"></lucide-icon>
        </button>

        <!-- Notification bell -->
        <button class="icon-btn relative">
          <lucide-icon [img]="BellIcon" size="20"></lucide-icon>
          <span class="badge-dot"></span>
        </button>

        <div class="divider"></div>

        <!-- User profile -->
        <div class="user-profile">
          <img
            src="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
            alt="Admin Avatar"
            class="user-avatar"
          />
          <div class="user-info">
            <span class="user-name">Đỗ Việt</span>
            <span class="user-role">System Administrator</span>
          </div>
        </div>
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

    .search-box {
      position: relative;
      display: flex;
      align-items: center;
      width: 320px;
    }

    .search-icon {
      position: absolute;
      left: 12px;
      color: var(--text-secondary);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      height: 38px;
      padding-left: 38px;
      padding-right: 12px;
      border-radius: 8px;
      border: 1px solid var(--surface-border);
      background: var(--surface-ground);
      color: var(--text-primary);
      font-size: 0.85rem;
      outline: none;
      transition: all 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .icon-btn {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      border: 1px solid var(--surface-border);
      background: var(--surface-ground);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
    }

    .icon-btn:hover {
      background: var(--surface-hover);
      border-color: var(--primary-color);
    }

    .badge-dot {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 8px;
      height: 8px;
      background: #ef4444;
      border-radius: 50%;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--surface-border);
      margin: 0 0.25rem;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      transition: background 0.2s;
    }

    .user-profile:hover {
      background: var(--surface-hover);
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .user-role {
      font-size: 0.7rem;
      color: var(--text-secondary);
    }
  `]
})
export class HeaderComponent {
  readonly SearchIcon = Search;
  readonly BellIcon = Bell;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;

  isDark = signal<boolean>(false);

  toggleDarkMode() {
    this.isDark.update(d => !d);
    if (this.isDark()) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }
}
