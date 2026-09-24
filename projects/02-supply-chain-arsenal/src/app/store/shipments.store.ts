import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { Shipment, ShipmentStatus } from '../models/shipment.model';
import { INITIAL_DISPATCH_SHIPMENTS, generate10kMockShipments } from '../core/mock/supply-chain-data';

export interface ShipmentsState {
  dispatchShipments: Shipment[];
  ledgerShipments: Shipment[];
  searchQuery: string;
  selectedStatusFilter: string;
  isLoading: boolean;
}

const initialState: ShipmentsState = {
  dispatchShipments: INITIAL_DISPATCH_SHIPMENTS,
  ledgerShipments: generate10kMockShipments(10000),
  searchQuery: '',
  selectedStatusFilter: 'ALL',
  isLoading: false
};

export const ShipmentsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ dispatchShipments, ledgerShipments, searchQuery, selectedStatusFilter }) => ({
    intakeShipments: computed(() =>
      dispatchShipments().filter(s => s.status === 'INTAKE')
    ),
    customsShipments: computed(() =>
      dispatchShipments().filter(s => s.status === 'CUSTOMS')
    ),
    inTransitShipments: computed(() =>
      dispatchShipments().filter(s => s.status === 'IN_TRANSIT')
    ),
    deliveredShipments: computed(() =>
      dispatchShipments().filter(s => s.status === 'DELIVERED')
    ),
    totalTonnage: computed(() =>
      Math.round(dispatchShipments().reduce((sum, s) => sum + s.weightKg, 0) / 1000)
    ),
    totalCargoValue: computed(() =>
      dispatchShipments().reduce((sum, s) => sum + s.declaredValueUsd, 0)
    ),
    urgentCount: computed(() =>
      dispatchShipments().filter(s => s.priority === 'URGENT' || s.priority === 'HAZARDOUS').length
    ),
    filteredLedger: computed(() => {
      const q = searchQuery().toLowerCase().trim();
      const status = selectedStatusFilter();
      const all = ledgerShipments();

      return all.filter(s => {
        const matchesQuery = !q ||
          s.awbNumber.toLowerCase().includes(q) ||
          s.containerCode.toLowerCase().includes(q) ||
          s.carrier.toLowerCase().includes(q) ||
          s.originHub.toLowerCase().includes(q) ||
          s.destinationHub.toLowerCase().includes(q) ||
          s.itemsDescription.toLowerCase().includes(q);
        const matchesStatus = status === 'ALL' || s.status === status;
        return matchesQuery && matchesStatus;
      });
    })
  })),
  withMethods((store) => ({
    moveShipment(id: string, newStatus: ShipmentStatus) {
      patchState(store, (state) => ({
        dispatchShipments: state.dispatchShipments.map(s =>
          s.id === id ? { ...s, status: newStatus } : s
        )
      }));
    },
    addShipment(data: Omit<Shipment, 'id' | 'createdAt'>) {
      const newShipment: Shipment = {
        ...data,
        id: `shp-${Date.now()}`,
        createdAt: '2026-09-24 10:45'
      };
      patchState(store, (state) => ({
        dispatchShipments: [newShipment, ...state.dispatchShipments],
        ledgerShipments: [newShipment, ...state.ledgerShipments]
      }));
    },
    removeShipment(id: string) {
      patchState(store, (state) => ({
        dispatchShipments: state.dispatchShipments.filter(s => s.id !== id),
        ledgerShipments: state.ledgerShipments.filter(s => s.id !== id)
      }));
    },
    setSearchQuery(q: string) {
      patchState(store, { searchQuery: q });
    },
    setStatusFilter(status: string) {
      patchState(store, { selectedStatusFilter: status });
    }
  }))
);
