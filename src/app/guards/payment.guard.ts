import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const paymentGuard = (): CanActivateFn => {
  // return true;

  return() => {
    const cookieService = inject(CookieService);
    const router = inject(Router);

    if(cookieService.get("Email") == '') {
      router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
    
  }
};

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
