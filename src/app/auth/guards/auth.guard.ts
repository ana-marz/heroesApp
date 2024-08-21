import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate{


    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    private checkAuthStatus(): boolean | Observable<boolean> {
        return this.authService.checkAuth()
            .pipe(
                tap(isAuthenticated => console.log('Authenticated:', isAuthenticated)),
                tap(isAuthenticated => {
                    if(!isAuthenticated)  {this.router.navigate(['./auth/login'])}
            } )
        )
    }

    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean  {
        console.log('Can match');
        console.log({route, segments})
        return this.checkAuthStatus();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('Can activate');
        console.log({ route, })
        return this.checkAuthStatus();
    }
    
}