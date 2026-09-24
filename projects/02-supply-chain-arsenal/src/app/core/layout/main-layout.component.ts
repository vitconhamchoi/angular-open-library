import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="layout-container">
      <app-sidebar></app-sidebar>
      <div class="layout-body">
        <app-header></app-header>
        <main class="page-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .layout-container {
      display: flex;
      min-height: 100vh;
      background: var(--surface-ground);
    }

    .layout-body {
      flex: 1;
      margin-left: var(--sidebar-width);
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: margin-left 0.3s ease;
    }

    .page-content {
      margin-top: var(--header-height);
      padding: 1.5rem;
      flex: 1;
    }
  `]
})
export class MainLayoutComponent {}
