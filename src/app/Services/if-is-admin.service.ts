import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class IfIsAdminService  implements CanActivate{

  constructor(
    private ck:CookieService,
    private token:TokenService, 
    private rt :Router
  ) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let condition = this.token.loggedIn();
    if(condition) {
     let info = atob(this.ck.get('grade'));
     if(info=='admin' || info=='super-admin'){return true}
     else{
      this.rt.navigateByUrl('');
      return false;
     }
    }
    else{
      this.rt.navigateByUrl('');
       return false;}
  }

    
}
