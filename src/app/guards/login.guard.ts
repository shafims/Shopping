import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = (route, state) => {
  // return true;

  const cooki = inject(CookieService);
  const router = inject(Router);

  if(cooki.get("Email")== '') {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
