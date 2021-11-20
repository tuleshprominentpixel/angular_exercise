import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,
        private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        const isAuthenticated = this.authService.getAuthStatus();
        if(!isAuthenticated){
        this.router.navigate(['login']);
        return false;
        }
        return true;
    }
}