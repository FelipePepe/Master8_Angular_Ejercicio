import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent implements OnInit {

  router: Router;

  constructor(public authService: AuthService, private routerprv: Router) {
    this.router = routerprv;
  }

  ngOnInit(): void {
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

}
