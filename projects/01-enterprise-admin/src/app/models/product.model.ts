export type InventoryStatus = 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  inventoryStatus: InventoryStatus;
  rating: number;
}

export interface ProductCategory {
  label: string;
  value: string;
}

export const CATEGORIES: ProductCategory[] = [
  { label: 'Điện tử & Máy tính', value: 'Electronics' },
  { label: 'Phụ kiện & Thiết bị', value: 'Accessories' },
  { label: 'Thiết bị văn phòng', value: 'Office' },
  { label: 'Âm thanh & Giải trí', value: 'Audio' }
];
