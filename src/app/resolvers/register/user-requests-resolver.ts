import { Resolve } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserRequestsResolver implements Resolve<any> {
    constructor(private authService: AuthenticationService) { }
    resolve() {
        return this.authService.getAllRegistrationRequests();
    }
} 