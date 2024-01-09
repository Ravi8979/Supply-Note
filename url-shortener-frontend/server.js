import { Injectable } from '@angular/core';
import { behaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',

})
export class AuthService {
    private isLoggedInSubject = new behaviorSubject<Boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    login() {
        //implement your authentication logic here
        this.isLoggedInSubject.next(true);

    }

    logout() {
        //Implement your logout logic here
        this.isLoggedInSubject.next(false);
        
    }
}