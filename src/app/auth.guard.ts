import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const isUserAuthenticated = localStorage.getItem('isValidProductAdd') === 'true';

    
    if (isUserAuthenticated) {
      return true; 
    } else {
      
      console.log('User not authenticated. Redirecting to login page...');
      this.router.navigate(['/dashboard']);
      return false; 
    }
  }
}
