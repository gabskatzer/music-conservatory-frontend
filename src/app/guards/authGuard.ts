import { Injectable } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private authService:AuthenticationService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            // return this.authService.isLoggedIn().pipe(
            //     map(isLoggedIn => {
            //         if(isLoggedIn){
            //             return true;
            //         }else{
            //             this.router.navigate(['/login']);
            //             return false;
            //         }
            //     })
            // )
            if(this.authService.isLoggedIn()){
                return true;
            }else{
                this.router.navigate(['/login']);
                return false;
            }
    }
    
}