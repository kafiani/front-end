import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IfIsSuperAdminService  implements CanActivate{

  constructor(
    private ck:CookieService,
    private token:TokenService, 
    private rt :Router
  ) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   if(this.token.loggedIn()){
     let info = atob(this.ck.get('grade'))
     if(info=='super-admin') return true
     this.rt.navigateByUrl('');
       return false;
   }
   else {
    this.rt.navigateByUrl('');
    return false;
   }
  }
}
