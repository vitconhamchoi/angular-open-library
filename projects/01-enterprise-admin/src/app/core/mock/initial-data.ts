import { Product } from '../../models/product.model';
import { ActivityItem } from '../../models/metric.model';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    code: 'PRD-M3MAX',
    name: 'MacBook Pro 16" M3 Max 36GB',
    description: 'Laptop hiệu năng đỉnh cao cho kỹ sư phần mềm và nhà sáng tạo nội dung.',
    category: 'Electronics',
    price: 3499,
    quantity: 18,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: 'prod-002',
    code: 'PRD-DELLX15',
    name: 'Dell XPS 15 OLED 4K Touch',
    description: 'Màn hình OLED 3.5K viền siêu mỏng, vi xử lý Intel Core i9 thế hệ 14.',
    category: 'Electronics',
    price: 2499,
    quantity: 6,
    inventoryStatus: 'LOWSTOCK',
    rating: 4.8
  },
  {
    id: 'prod-003',
    code: 'PRD-LG40WP',
    name: 'LG UltraWide 40" 5K2K Curved Monitor',
    description: 'Màn hình cong 21:9 chuẩn Nano IPS với cổng kết nối Thunderbolt 4.',
    category: 'Office',
    price: 1799,
    quantity: 12,
    inventoryStatus: 'INSTOCK',
    rating: 4.9
  },
  {
    id: 'prod-004',
    code: 'PRD-KEYCH',
    name: 'Bàn phím cơ Keychron Q1 Pro Wireless',
    description: 'Khung nhôm CNC nguyên khối, kết nối Bluetooth 5.1 và hot-swap.',
    category: 'Accessories',
    price: 199,
    quantity: 45,
    inventoryStatus: 'INSTOCK',
    rating: 4.7
  },
  {
    id: 'prod-005',
    code: 'PRD-MXM3S',
    name: 'Chuột không dây Logitech MX Master 3S',
    description: 'Cảm biến 8K DPI Darkfield, con lăn điện từ MagSpeed cực êm.',
    category: 'Accessories',
    price: 99,
    quantity: 80,
    inventoryStatus: 'INSTOCK',
    rating: 4.9
  },
  {
    id: 'prod-006',
    code: 'PRD-SONYXM5',
    name: 'Tai nghe Sony WH-1000XM5 Chống ồn',
    description: 'Bộ xử lý chống ồn V1 chuyên dụng, pin 30 giờ và âm thanh Hi-Res.',
    category: 'Audio',
    price: 399,
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4.8
  },
  {
    id: 'prod-007',
    code: 'PRD-AIRPMAX',
    name: 'Apple AirPods Max Space Gray',
    description: 'Tai nghe chụp tai cao cấp của Apple với âm thanh không gian Spatial Audio.',
    category: 'Audio',
    price: 549,
    quantity: 4,
    inventoryStatus: 'LOWSTOCK',
    rating: 4.6
  },
  {
    id: 'prod-008',
    code: 'PRD-CALDIT4',
    name: 'Dock CalDigit TS4 Thunderbolt 4 (18 cổng)',
    description: 'Trạm kết nối 18-trong-1 sạc tối đa 98W cho MacBook và Laptop.',
    category: 'Accessories',
    price: 399,
    quantity: 22,
    inventoryStatus: 'INSTOCK',
    rating: 4.9
  }
];

export const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    user: 'Nguyễn Văn Minh',
    action: 'vừa đặt mua',
    target: '2x MacBook Pro 16" M3 Max',
    time: '5 phút trước',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
  },
  {
    id: 'act-2',
    user: 'Trần Thị Thu Thảo',
    action: 'đã cập nhật kho hàng',
    target: 'Bàn phím cơ Keychron Q1 Pro (+20)',
    time: '28 phút trước',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png'
  },
  {
    id: 'act-3',
    user: 'Lê Hoàng Long',
    action: 'thanh toán thành công đơn hàng',
    target: '#ORD-8829 ($4,298)',
    time: '1 giờ trước',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/bernardodomingues.png'
  },
  {
    id: 'act-4',
    user: 'Hệ thống tự động',
    action: 'cảnh báo tồn kho thấp cho sản phẩm',
    target: 'Apple AirPods Max',
    time: '3 giờ trước',
    avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png'
  }
];

export const MONTHLY_REVENUE_DATA = {
  months: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  revenue: [45000, 52000, 48000, 61000, 75000, 82000, 91000, 88000, 95000, 112000, 128000, 145000],
  profit: [18000, 22000, 19500, 26000, 32000, 36000, 41000, 39500, 43000, 51000, 58000, 68000]
};
