import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthTeacherGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem('type_user')) {
                if (localStorage.getItem('type_user') == 'teacher') {
                    this.router.navigate(['/teacher/Dashboard'])
                    return false;
                } else {
                    this.router.navigate([localStorage.getItem('type_user') + '/Dashboard']);
                    return false;
                }
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('type_user');
                this.router.navigate(['main']);
                return false;
            }
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('type_user');
            return true
        }
    }
}