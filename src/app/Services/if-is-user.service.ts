import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './admin.service';
import { CheckCanActiveService } from './check-can-active.service';
import { Subject, Observable } from 'rxjs';
import { database } from 'firebase';
import { CookiesService } from './cookies.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IfIsUserService implements CanActivate {
   private user  = false;
   private admin  = false;
   private super_admin  = false;
  constructor(private token :TokenService,
    private Admin:AdminService,
    private router:Router,
    private check:CheckCanActiveService,
    private cookie:CookieService,
    private rt :Router
    ) { 
    }
    private obs  = new Subject<boolean>();
  private as_obs = this.obs.asObservable();
    private cd = false;
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   let info=  this.token.loggedIn();
   if(info) return true
   else{
    this.rt.navigateByUrl('not-autorize');
    return false;
   }


}

}
