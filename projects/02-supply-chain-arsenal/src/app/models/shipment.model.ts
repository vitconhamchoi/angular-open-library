export type ShipmentStatus = 'INTAKE' | 'CUSTOMS' | 'IN_TRANSIT' | 'DELIVERED';
export type PriorityLevel = 'NORMAL' | 'URGENT' | 'HAZARDOUS';

export interface Shipment {
  id: string;
  awbNumber: string;         // e.g. 784-99281723
  containerCode: string;     // e.g. MSKU-8829104
  originHub: string;         // e.g. Tân Cảng Cát Lái (VNSGN)
  destinationHub: string;    // e.g. Cảng Rotterdam (NLRTM)
  carrier: string;           // Maersk, MSC, Vietnam Airlines Cargo
  weightKg: number;
  volumeCbm: number;
  declaredValueUsd: number;
  status: ShipmentStatus;
  driverPlate: string;       // Biển số xe container
  priority: PriorityLevel;
  itemsDescription: string;
  createdAt: string;
  estimatedArrival: string;
}

export interface HubLocation {
  code: string;
  name: string;
  country: string;
  type: 'SEA' | 'AIR' | 'LAND';
}

export const GLOBAL_HUBS: HubLocation[] = [
  { code: 'VNSGN', name: 'Cát Lái Hub (Hồ Chí Minh)', country: 'Vietnam', type: 'SEA' },
  { code: 'VNHPH', name: 'Đình Vũ Hub (Hải Phòng)', country: 'Vietnam', type: 'SEA' },
  { code: 'SGSIN', name: 'Jurong Port (Singapore)', country: 'Singapore', type: 'SEA' },
  { code: 'NLRTM', name: 'Port of Rotterdam', country: 'Netherlands', type: 'SEA' },
  { code: 'USLAX', name: 'Los Angeles Gateway', country: 'USA', type: 'SEA' },
  { code: 'VNSGN-AIR', name: 'Tân Sơn Nhất Cargo (SGN)', country: 'Vietnam', type: 'AIR' }
];
