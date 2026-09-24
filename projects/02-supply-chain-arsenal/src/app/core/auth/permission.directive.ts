import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect, signal } from '@angular/core';
import { AuthStore } from './auth.store';
import { UserRole } from '../../models/role.model';

@Directive({
  selector: '[appPermission]',
  standalone: true
})
export class AppPermissionDirective {
  private readonly templateRef = inject(TemplateRef<any>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly authStore = inject(AuthStore);

  private readonly requiredPermissions = signal<string[]>([]);
  private isViewCreated = false;

  @Input('appPermission') set permission(val: UserRole | string | (UserRole | string)[]) {
    const list = Array.isArray(val) ? val : [val];
    this.requiredPermissions.set(list);
  }

  constructor() {
    effect(() => {
      const allowedRolesOrActions = this.requiredPermissions();
      const currentRole = this.authStore.currentRole();
      const allowedActions = this.authStore.allowedActions();

      // Check if currentRole or any of currentRole's allowedActions matches
      const hasAccess = allowedRolesOrActions.some(req =>
        req === currentRole || req === 'DIRECTOR' || allowedActions.includes(req)
      );

      if (hasAccess && !this.isViewCreated) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isViewCreated = true;
      } else if (!hasAccess && this.isViewCreated) {
        this.viewContainer.clear();
        this.isViewCreated = false;
      }
    });
  }
}
