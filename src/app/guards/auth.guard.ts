import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  auth;
  constructor(private router: Router){ }
  
  canLoad() {
    const isAuthenticated = !!(+localStorage.getItem('authenticated'));
    if (isAuthenticated){
      this.auth = true;
      return true;
    }
    else{
      this.router.navigateByUrl('/tab3');
      this.auth = false;
      return false;
    }
  }
}
