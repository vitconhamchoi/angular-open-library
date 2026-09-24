export type UserRole = 'DIRECTOR' | 'DISPATCHER' | 'CUSTOMS_OFFICER' | 'WAREHOUSE_STAFF';

export interface RoleProfile {
  role: UserRole;
  title: string;
  badgeColor: string;
  description: string;
  allowedActions: string[];
}

export const ROLE_PROFILES: Record<UserRole, RoleProfile> = {
  DIRECTOR: {
    role: 'DIRECTOR',
    title: 'Giám Đốc Chuỗi Cung Ứng',
    badgeColor: '#8b5cf6',
    description: 'Toàn quyền điều hành, phê duyệt chi phí và hủy bỏ vận đơn khẩn cấp.',
    allowedActions: ['VIEW', 'DISPATCH', 'APPROVE_CUSTOMS', 'CANCEL_SHIPMENT', 'EXPORT_REPORT']
  },
  DISPATCHER: {
    role: 'DISPATCHER',
    title: 'Chuyên Viên Điều Phối Vận Tải',
    badgeColor: '#0284c7',
    description: 'Kéo thả lộ trình, phân bổ tài xế và chuyển đổi chặng vận chuyển.',
    allowedActions: ['VIEW', 'DISPATCH', 'CREATE_SHIPMENT']
  },
  CUSTOMS_OFFICER: {
    role: 'CUSTOMS_OFFICER',
    title: 'Cán Cân Hải Quan Cảng',
    badgeColor: '#f59e0b',
    description: 'Thẩm định hồ sơ xuất nhập khẩu, xác nhận thông quan hàng hóa.',
    allowedActions: ['VIEW', 'APPROVE_CUSTOMS']
  },
  WAREHOUSE_STAFF: {
    role: 'WAREHOUSE_STAFF',
    title: 'Thủ Kho & Tiếp Nhận',
    badgeColor: '#10b981',
    description: 'Tiếp nhận kiện hàng, quét mã AWB và nhập liệu cân nặng thực tế.',
    allowedActions: ['VIEW', 'CREATE_SHIPMENT']
  }
};
