import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ShipmentsStore } from '../../store/shipments.store';
import { GLOBAL_HUBS } from '../../models/shipment.model';
import { LucideAngularModule, ShieldCheck, Send, CheckCircle2, FileText, Sparkles } from 'lucide-angular';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-shipment-intake',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, LucideAngularModule],
  templateUrl: './shipment-intake.component.html',
  styleUrl: './shipment-intake.component.scss'
})
export class ShipmentIntakeComponent {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(ShipmentsStore);
  private readonly router = inject(Router);

  readonly ShieldIcon = ShieldCheck;
  readonly SendIcon = Send;
  readonly CheckIcon = CheckCircle2;
  readonly FileIcon = FileText;
  readonly SparkleIcon = Sparkles;

  hubs = GLOBAL_HUBS;
  carriers = ['Maersk Line', 'CMA CGM', 'MSC', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'Vietnam Airlines Cargo'];

  form: FormGroup = this.fb.group({
    awbNumber: ['84290184712', [Validators.required, Validators.minLength(11)]],
    containerCode: ['MSKU8829104', [Validators.required, Validators.minLength(11)]],
    driverPlate: ['51C98214', [Validators.required]],
    driverPhone: ['84908123456', [Validators.required]],
    eoriTaxNumber: ['0312849102001', [Validators.required]],
    originHub: ['Cát Lái Hub (Hồ Chí Minh)', Validators.required],
    destinationHub: ['Port of Rotterdam', Validators.required],
    carrier: ['Maersk Line', Validators.required],
    weightKg: ['24500', Validators.required],
    volumeCbm: [65, Validators.required],
    declaredValueUsd: ['185000', Validators.required],
    priority: ['NORMAL', Validators.required],
    itemsDescription: ['Lô hàng vi mạch điện tử & Cảm biến IoT công nghiệp', Validators.required]
  });

  submitShipment() {
    if (this.form.invalid) {
      toast.error('Dữ liệu chưa đúng chuẩn mặt nạ (Mask Error)!', {
        description: 'Vui lòng kiểm tra lại mã AWB, Container, hoặc biển số xe.'
      });
      return;
    }

    const val = this.form.value;
    this.store.addShipment({
      awbNumber: `${val.awbNumber.slice(0, 3)}-${val.awbNumber.slice(3)}`,
      containerCode: `${val.containerCode.slice(0, 4)}-${val.containerCode.slice(4)}`,
      originHub: val.originHub,
      destinationHub: val.destinationHub,
      carrier: val.carrier,
      weightKg: Number(val.weightKg),
      volumeCbm: Number(val.volumeCbm),
      declaredValueUsd: Number(val.declaredValueUsd),
      status: 'INTAKE',
      driverPlate: val.driverPlate,
      priority: val.priority,
      itemsDescription: val.itemsDescription,
      estimatedArrival: '2026-10-25'
    });

    toast.success('Khai báo vận đơn thành công!', {
      description: `Vận đơn AWB ${val.awbNumber} đã được đưa vào cột Tiếp Nhận Cảng.`
    });

    this.router.navigate(['/dispatch']);
  }
}
