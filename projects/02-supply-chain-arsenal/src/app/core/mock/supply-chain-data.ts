import { Shipment, ShipmentStatus, PriorityLevel } from '../../models/shipment.model';

export const INITIAL_DISPATCH_SHIPMENTS: Shipment[] = [
  {
    id: 'shp-101',
    awbNumber: '738-90412845',
    containerCode: 'MSKU-7821940',
    originHub: 'Cát Lái Hub (Hồ Chí Minh)',
    destinationHub: 'Port of Rotterdam',
    carrier: 'Maersk Line',
    weightKg: 24500,
    volumeCbm: 68,
    declaredValueUsd: 145000,
    status: 'INTAKE',
    driverPlate: '51C-982.14',
    priority: 'NORMAL',
    itemsDescription: 'Linh kiện điện tử bán dẫn & Bo mạch công nghiệp',
    createdAt: '2026-09-24 08:30',
    estimatedArrival: '2026-10-18'
  },
  {
    id: 'shp-102',
    awbNumber: '988-12498571',
    containerCode: 'CMAU-4910283',
    originHub: 'Đình Vũ Hub (Hải Phòng)',
    destinationHub: 'Los Angeles Gateway',
    carrier: 'CMA CGM',
    weightKg: 18200,
    volumeCbm: 52,
    declaredValueUsd: 89000,
    status: 'INTAKE',
    driverPlate: '15C-341.89',
    priority: 'URGENT',
    itemsDescription: 'Dệt may thời trang xuất khẩu vụ thu đông',
    createdAt: '2026-09-24 09:15',
    estimatedArrival: '2026-10-12'
  },
  {
    id: 'shp-103',
    awbNumber: '217-48392019',
    containerCode: 'ONEY-8819203',
    originHub: 'Cát Lái Hub (Hồ Chí Minh)',
    destinationHub: 'Jurong Port (Singapore)',
    carrier: 'Ocean Network Express',
    weightKg: 31000,
    volumeCbm: 74,
    declaredValueUsd: 320000,
    status: 'CUSTOMS',
    driverPlate: '50LD-102.45',
    priority: 'HAZARDOUS',
    itemsDescription: 'Pin Lithium-Ion dung lượng cao cho xe điện',
    createdAt: '2026-09-23 14:00',
    estimatedArrival: '2026-09-28'
  },
  {
    id: 'shp-104',
    awbNumber: '618-77291034',
    containerCode: 'EGLV-3019284',
    originHub: 'Đình Vũ Hub (Hải Phòng)',
    destinationHub: 'Port of Rotterdam',
    carrier: 'Evergreen Marine',
    weightKg: 22000,
    volumeCbm: 60,
    declaredValueUsd: 110000,
    status: 'CUSTOMS',
    driverPlate: '16H-782.01',
    priority: 'NORMAL',
    itemsDescription: 'Cà phê Robusta Đắk Lắk chế biến sâu',
    createdAt: '2026-09-23 16:45',
    estimatedArrival: '2026-10-22'
  },
  {
    id: 'shp-105',
    awbNumber: '784-55102938',
    containerCode: 'MEDU-9028174',
    originHub: 'Jurong Port (Singapore)',
    destinationHub: 'Port of Rotterdam',
    carrier: 'Mediterranean Shipping Co',
    weightKg: 28000,
    volumeCbm: 65,
    declaredValueUsd: 480000,
    status: 'IN_TRANSIT',
    driverPlate: 'SG-9921-X',
    priority: 'URGENT',
    itemsDescription: 'Thiết bị y tế phẫu thuật chính xác',
    createdAt: '2026-09-21 11:20',
    estimatedArrival: '2026-10-05'
  },
  {
    id: 'shp-106',
    awbNumber: '020-33910294',
    containerCode: 'HLCU-1829047',
    originHub: 'Cát Lái Hub (Hồ Chí Minh)',
    destinationHub: 'Los Angeles Gateway',
    carrier: 'Hapag-Lloyd',
    weightKg: 19500,
    volumeCbm: 58,
    declaredValueUsd: 95000,
    status: 'IN_TRANSIT',
    driverPlate: '51D-441.90',
    priority: 'NORMAL',
    itemsDescription: 'Gỗ nội thất tự nhiên cao cấp',
    createdAt: '2026-09-20 08:00',
    estimatedArrival: '2026-10-10'
  },
  {
    id: 'shp-107',
    awbNumber: '180-88291048',
    containerCode: 'COSU-6619284',
    originHub: 'Jurong Port (Singapore)',
    destinationHub: 'Cát Lái Hub (Hồ Chí Minh)',
    carrier: 'COSCO Shipping',
    weightKg: 14000,
    volumeCbm: 40,
    declaredValueUsd: 78000,
    status: 'DELIVERED',
    driverPlate: '60C-552.19',
    priority: 'NORMAL',
    itemsDescription: 'Hạt nhựa nguyên sinh công nghiệp',
    createdAt: '2026-09-18 10:10',
    estimatedArrival: '2026-09-24'
  }
];

export function generate10kMockShipments(count = 10000): Shipment[] {
  const hubs = [
    'Cát Lái Hub (VNSGN)', 'Đình Vũ Hub (VNHPH)', 'Jurong Port (SGSIN)',
    'Port of Rotterdam (NLRTM)', 'Los Angeles Gateway (USLAX)', 'Tân Sơn Nhất Cargo (SGN)'
  ];
  const carriers = ['Maersk Line', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'Vietnam Airlines Cargo'];
  const prefixes = ['MSKU', 'CMAU', 'MEDU', 'ONEY', 'HLCU', 'EGLV', 'COSU'];
  const statuses: ShipmentStatus[] = ['INTAKE', 'CUSTOMS', 'IN_TRANSIT', 'DELIVERED'];
  const priorities: PriorityLevel[] = ['NORMAL', 'NORMAL', 'NORMAL', 'URGENT', 'HAZARDOUS'];
  const goods = [
    'Linh kiện vi mạch điện tử', 'Thực phẩm đông lạnh xuất khẩu', 'Hóa chất công nghiệp',
    'Thép cuộn xây dựng', 'Vải sợi và phụ liệu may', 'Nội thất gỗ xuất khẩu', 'Hạt điều và tiêu', 'Phụ tùng ô tô'
  ];

  const results: Shipment[] = [];
  for (let i = 1; i <= count; i++) {
    const originIdx = Math.floor(Math.random() * hubs.length);
    let destIdx = Math.floor(Math.random() * hubs.length);
    if (destIdx === originIdx) destIdx = (destIdx + 1) % hubs.length;

    const carrier = carriers[Math.floor(Math.random() * carriers.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const good = goods[Math.floor(Math.random() * goods.length)];

    const awbFirst = String(100 + (i % 890));
    const awbSecond = String(10000000 + (i * 37) % 89999999);
    const containerNum = String(1000000 + (i * 19) % 8999999);

    results.push({
      id: `shp-${i}`,
      awbNumber: `${awbFirst}-${awbSecond}`,
      containerCode: `${prefix}-${containerNum}`,
      originHub: hubs[originIdx],
      destinationHub: hubs[destIdx],
      carrier,
      weightKg: Math.floor(5000 + (i * 123) % 30000),
      volumeCbm: Math.floor(20 + (i * 7) % 65),
      declaredValueUsd: Math.floor(20000 + (i * 450) % 500000),
      status,
      driverPlate: `51C-${Math.floor(100 + (i % 899))}.${Math.floor(10 + (i % 89))}`,
      priority,
      itemsDescription: good,
      createdAt: `2026-09-${String(1 + (i % 23)).padStart(2, '0')}`,
      estimatedArrival: `2026-10-${String(5 + (i % 25)).padStart(2, '0')}`
    });
  }
  return results;
}
