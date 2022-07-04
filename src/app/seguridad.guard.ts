import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
  usuario:string|null=""
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const admin=this.usuario=localStorage.getItem('rol')
      if(admin === 'admin'){
        return true;
      }else{
        return false;
      }
  }

}
