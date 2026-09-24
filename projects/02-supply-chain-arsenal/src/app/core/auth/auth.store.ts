import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { UserRole, ROLE_PROFILES, RoleProfile } from '../../models/role.model';

export interface AuthState {
  currentRole: UserRole;
  userName: string;
}

const initialState: AuthState = {
  currentRole: 'DIRECTOR',
  userName: 'Trần Đại Nghĩa'
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ currentRole }) => ({
    roleProfile: computed<RoleProfile>(() => ROLE_PROFILES[currentRole()]),
    allowedActions: computed<string[]>(() => ROLE_PROFILES[currentRole()].allowedActions),
    isDirector: computed(() => currentRole() === 'DIRECTOR'),
    isCustoms: computed(() => currentRole() === 'CUSTOMS_OFFICER'),
    isDispatcher: computed(() => currentRole() === 'DISPATCHER'),
    isWarehouse: computed(() => currentRole() === 'WAREHOUSE_STAFF')
  })),
  withMethods((store) => ({
    setRole(role: UserRole) {
      patchState(store, { currentRole: role });
    }
  }))
);
