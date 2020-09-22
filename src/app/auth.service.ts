import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private router: Router;

	constructor(router: Router) {
		this.router = router;
	}

	private loginOK: Subject<string> = new Subject<string>();

	getLoginOK(): Observable<string> {
		return this.loginOK.asObservable();
	}

	login(user: string, password: string): boolean {
		//if (user === 'master8@lemoncode.net' && password === '12345678') {
		if (
			(user === 'user' && password === 'pass') ||
			(user === 'admin' && password === 'admin')
		) {
			localStorage.setItem('username', user);
			this.loginOK.next(user);
			return true;
		} else {
			this.loginOK.next('');
		}

		return false;
	}

	logout(): void {
		localStorage.removeItem('username');
		this.loginOK.next('');
		this.router.navigate(['home'], { skipLocationChange: true });
	}

	getUsername(): string {
		return localStorage.getItem('username');
	}

	isLogged(): boolean {
		return this.getUsername() != null;
	}
}

export const AUTH_PROVIDERS: Array<any> = [
	{ provide: AuthService, userClass: AuthService },
];
