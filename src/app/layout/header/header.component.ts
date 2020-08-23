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
  privateMenu: string;

  constructor(public authService: AuthService) {
    this.privateMenu = authService.getUsername();
  }



  ngOnInit(): void {
    this.loginOK = this.authService.getLoginOK();
    this.loginOK.subscribe(user => this.privateMenu = user);

  }

}
