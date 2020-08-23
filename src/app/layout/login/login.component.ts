import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  router: Router;

  constructor(public authService: AuthService, router: Router, private _snackBar: MatSnackBar) {
    this.message = '';
    this.router = router;
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials';
      this.openSnackBar(this.message)
    }
    else {
      this.router.navigate(['dashboard'], { skipLocationChange: true });
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }


}
