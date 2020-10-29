import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../security/auth.service';
import { ToastService } from '../../package/toast';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private toast: ToastService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | boolean {

    if (route.data.roles && !this.auth.getAnyPermission(route.data.roles)) {
      this.toast.info('Você não tem permissão para acessar este recurso!');
      return false;
    }

    return true;
  }
}
