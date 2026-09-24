import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsStore } from '../../store/products.store';
import { Product, CATEGORIES, ProductCategory, InventoryStatus } from '../../models/product.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LucideAngularModule, Plus, Search, Pencil, Trash2, Filter, Package, AlertCircle } from 'lucide-angular';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    DialogModule,
    SelectModule,
    LucideAngularModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  readonly store = inject(ProductsStore);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);

  readonly PlusIcon = Plus;
  readonly SearchIcon = Search;
  readonly PencilIcon = Pencil;
  readonly TrashIcon = Trash2;
  readonly FilterIcon = Filter;
  readonly PackageIcon = Package;
  readonly AlertIcon = AlertCircle;

  categories: ProductCategory[] = [
    { label: 'Tất cả danh mục', value: '' },
    ...CATEGORIES
  ];

  selectedCategory = signal<ProductCategory>(this.categories[0]);
  searchTerm = signal<string>('');

  // Dialog State
  productDialog = signal<boolean>(false);
  isEditMode = signal<boolean>(false);

  // Form State
  currentProduct = signal<Partial<Product>>({
    code: '',
    name: '',
    description: '',
    category: 'Electronics',
    price: 0,
    quantity: 1,
    inventoryStatus: 'INSTOCK',
    rating: 5
  });

  onSearchChange(term: string) {
    this.searchTerm.set(term);
    this.store.setSearch(term);
  }

  onCategoryChange(cat: ProductCategory) {
    this.selectedCategory.set(cat);
    this.store.setCategory(cat.value);
  }

  openNew() {
    this.currentProduct.set({
      code: `PRD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: '',
      description: '',
      category: 'Electronics',
      price: 99,
      quantity: 10,
      inventoryStatus: 'INSTOCK',
      rating: 5
    });
    this.isEditMode.set(false);
    this.productDialog.set(true);
  }

  editProduct(product: Product) {
    this.currentProduct.set({ ...product });
    this.isEditMode.set(true);
    this.productDialog.set(true);
  }

  saveProduct() {
    const p = this.currentProduct();
    if (!p.name || !p.code || p.price === undefined) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Thiếu thông tin',
        detail: 'Vui lòng nhập đầy đủ Mã, Tên và Giá sản phẩm.'
      });
      return;
    }

    // Determine status automatically based on quantity
    let status: InventoryStatus = 'INSTOCK';
    if ((p.quantity || 0) === 0) status = 'OUTOFSTOCK';
    else if ((p.quantity || 0) <= 10) status = 'LOWSTOCK';

    if (this.isEditMode() && p.id) {
      this.store.updateProduct(p.id, {
        name: p.name,
        code: p.code,
        description: p.description || '',
        category: p.category || 'Electronics',
        price: Number(p.price),
        quantity: Number(p.quantity || 0),
        inventoryStatus: status,
        rating: p.rating || 5
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Thành công',
        detail: `Đã cập nhật sản phẩm "${p.name}".`
      });
    } else {
      this.store.addProduct({
        code: p.code,
        name: p.name,
        description: p.description || '',
        category: p.category || 'Electronics',
        price: Number(p.price),
        quantity: Number(p.quantity || 0),
        inventoryStatus: status,
        rating: p.rating || 5
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Thành công',
        detail: `Đã thêm mới sản phẩm "${p.name}".`
      });
    }

    this.productDialog.set(false);
  }

  confirmDelete(product: Product) {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xóa vĩnh viễn sản phẩm "${product.name}" không?`,
      header: 'Xác nhận xóa sản phẩm',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Xóa',
      rejectLabel: 'Hủy',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.store.deleteProduct(product.id);
        this.messageService.add({
          severity: 'info',
          summary: 'Đã xóa',
          detail: `Sản phẩm "${product.name}" đã được xóa khỏi hệ thống.`
        });
      }
    });
  }

  getSeverity(status: InventoryStatus): 'success' | 'warn' | 'danger' | 'info' {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  getStatusLabel(status: InventoryStatus): string {
    switch (status) {
      case 'INSTOCK':
        return 'Còn hàng';
      case 'LOWSTOCK':
        return 'Sắp hết';
      case 'OUTOFSTOCK':
        return 'Hết hàng';
      default:
        return status;
    }
  }
}
