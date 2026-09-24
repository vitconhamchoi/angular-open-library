import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ToastModule, ConfirmDialogModule],
  template: `
    <div class="layout-wrapper">
      <app-sidebar></app-sidebar>
      <div class="layout-main">
        <app-header></app-header>
        <main class="content-container">
          <router-outlet></router-outlet>
        </main>
      </div>
      <p-toast position="top-right"></p-toast>
      <p-confirm-dialog></p-confirm-dialog>
    </div>
  `,
  styles: [`
    .layout-wrapper {
      display: flex;
      min-height: 100vh;
      background: var(--surface-ground);
    }

    .layout-main {
      flex: 1;
      margin-left: var(--sidebar-width);
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: margin-left 0.3s ease;
    }

    .content-container {
      margin-top: var(--header-height);
      padding: 1.5rem;
      flex: 1;
    }
  `]
})
export class MainLayoutComponent {}
