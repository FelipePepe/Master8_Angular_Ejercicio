import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  privateMenu: string;

  ngOnInit(): void {
    this.privateMenu = this.authService.getUser();
  }

}
