import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  router: Router;

  constructor(public authService: AuthService, router: Router) {
    this.message = '';
    this.router = router;
  }

  ngOnInit(): void {
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    }
    else {
      this.router.navigate(['dashboard'], {skipLocationChange: true});
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }


}
