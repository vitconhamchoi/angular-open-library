import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dispatch',
        pathMatch: 'full'
      },
      {
        path: 'dispatch',
        loadComponent: () =>
          import('./features/dispatch-board/dispatch-board.component').then(m => m.DispatchBoardComponent)
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./features/inventory-ledger/inventory-ledger.component').then(m => m.InventoryLedgerComponent)
      },
      {
        path: 'intake',
        loadComponent: () =>
          import('./features/shipment-intake/shipment-intake.component').then(m => m.ShipmentIntakeComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dispatch'
  }
];
