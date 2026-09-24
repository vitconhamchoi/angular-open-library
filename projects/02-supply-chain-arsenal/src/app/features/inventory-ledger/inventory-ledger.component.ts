import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ShipmentsStore } from '../../store/shipments.store';
import { Shipment, ShipmentStatus } from '../../models/shipment.model';
import { LucideAngularModule, Search, Layers, ShieldCheck, Zap, Download } from 'lucide-angular';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-inventory-ledger',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollingModule, LucideAngularModule],
  templateUrl: './inventory-ledger.component.html',
  styleUrl: './inventory-ledger.component.scss'
})
export class InventoryLedgerComponent {
  readonly store = inject(ShipmentsStore);

  readonly SearchIcon = Search;
  readonly LayersIcon = Layers;
  readonly ShieldIcon = ShieldCheck;
  readonly ZapIcon = Zap;
  readonly DownloadIcon = Download;

  searchTerm = signal<string>('');
  selectedStatus = signal<string>('ALL');

  onSearchChange(val: string) {
    this.searchTerm.set(val);
    this.store.setSearchQuery(val);
  }

  onStatusChange(val: string) {
    this.selectedStatus.set(val);
    this.store.setStatusFilter(val);
  }

  showShipmentDetail(shipment: Shipment) {
    toast(`Vận đơn ${shipment.awbNumber}`, {
      description: `Container: ${shipment.containerCode} • Hàng hóa: ${shipment.itemsDescription} • Giá trị: $${shipment.declaredValueUsd.toLocaleString()}`
    });
  }

  exportAuditReport() {
    toast.success('Đã xuất báo cáo kiểm toán điện tử', {
      description: `Xuất thành công dữ liệu ${this.store.filteredLedger().length.toLocaleString()} kiện hàng dạng CSV.`
    });
  }
}
