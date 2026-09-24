import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { ShipmentsStore } from '../../store/shipments.store';
import { AuthStore } from '../../core/auth/auth.store';
import { AppPermissionDirective } from '../../core/auth/permission.directive';
import { Shipment, ShipmentStatus } from '../../models/shipment.model';
import { LucideAngularModule, Plane, Ship, Truck, CheckCircle2, AlertTriangle, ShieldCheck, Trash2, ArrowRight } from 'lucide-angular';
import { toast } from 'ngx-sonner';

interface KanbanColumn {
  id: ShipmentStatus;
  title: string;
  badgeClass: string;
  description: string;
}

@Component({
  selector: 'app-dispatch-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, AppPermissionDirective, LucideAngularModule],
  templateUrl: './dispatch-board.component.html',
  styleUrl: './dispatch-board.component.scss'
})
export class DispatchBoardComponent {
  readonly shipmentsStore = inject(ShipmentsStore);
  readonly authStore = inject(AuthStore);

  readonly PlaneIcon = Plane;
  readonly ShipIcon = Ship;
  readonly TruckIcon = Truck;
  readonly CheckIcon = CheckCircle2;
  readonly AlertIcon = AlertTriangle;
  readonly ShieldIcon = ShieldCheck;
  readonly TrashIcon = Trash2;
  readonly ArrowIcon = ArrowRight;

  columns: KanbanColumn[] = [
    {
      id: 'INTAKE',
      title: '1. Tiếp Nhận Cảng Hub',
      badgeClass: 'badge-intake',
      description: 'Kiện hàng mới hạ bãi, chờ phân luồng kiểm hóa'
    },
    {
      id: 'CUSTOMS',
      title: '2. Thủ Tục Hải Quan',
      badgeClass: 'badge-customs',
      description: 'Yêu cầu thẩm định hải quan & kiểm định chất lượng'
    },
    {
      id: 'IN_TRANSIT',
      title: '3. Vận Chuyển Quốc Tế',
      badgeClass: 'badge-transit',
      description: 'Đang hành trình trên biển / hàng không'
    },
    {
      id: 'DELIVERED',
      title: '4. Đã Giao Cảng Đích',
      badgeClass: 'badge-delivered',
      description: 'Hoàn tất bàn giao cho đối tác logistics địa phương'
    }
  ];

  getColumnItems(status: ShipmentStatus): Shipment[] {
    switch (status) {
      case 'INTAKE': return this.shipmentsStore.intakeShipments();
      case 'CUSTOMS': return this.shipmentsStore.customsShipments();
      case 'IN_TRANSIT': return this.shipmentsStore.inTransitShipments();
      case 'DELIVERED': return this.shipmentsStore.deliveredShipments();
    }
  }

  onDrop(event: CdkDragDrop<Shipment[]>, targetColumn: ShipmentStatus) {
    const shipment: Shipment = event.item.data;

    // RBAC Security Gate: Only CUSTOMS_OFFICER or DIRECTOR can approve moving from/to CUSTOMS
    if (targetColumn === 'IN_TRANSIT' && shipment.status === 'CUSTOMS') {
      const allowed = this.authStore.isCustoms() || this.authStore.isDirector();
      if (!allowed) {
        toast.error('Từ chối quyền hạn (Security Blocked)!', {
          description: `Vai trò "${this.authStore.roleProfile().title}" không có quyền thông quan. Cần Hải Quan hoặc Giám Đốc phê duyệt.`
        });
        return;
      }
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.shipmentsStore.moveShipment(shipment.id, targetColumn);
      toast.success(`Đã cập nhật trạng thái vận đơn ${shipment.awbNumber}`, {
        description: `Chuyển sang: ${targetColumn} • Trọng lượng: ${shipment.weightKg.toLocaleString()} kg`
      });
    }
  }

  approveCustomsDirectly(shipment: Shipment) {
    this.shipmentsStore.moveShipment(shipment.id, 'IN_TRANSIT');
    toast.success(`Hải quan đã phê duyệt thông quan lô hàng ${shipment.awbNumber}`, {
      description: `Container ${shipment.containerCode} đã được niêm phong chì điện tử.`
    });
  }

  cancelShipment(shipment: Shipment) {
    this.shipmentsStore.removeShipment(shipment.id);
    toast.warning(`Đã hủy vận đơn ${shipment.awbNumber}`, {
      description: 'Lệnh đã được ghi nhận vào nhật ký kiểm toán hệ thống.'
    });
  }
}
