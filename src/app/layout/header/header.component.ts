import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  loginOK: Observable<string>;
  userName: string;

  constructor(public authService: AuthService) {
    this.userName = authService.getUsername();
  }



  ngOnInit(): void {
    this.loginOK = this.authService.getLoginOK();
    this.loginOK.subscribe(user => this.userName = user);

  }

}
