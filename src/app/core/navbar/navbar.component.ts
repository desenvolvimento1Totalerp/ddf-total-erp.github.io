import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this.auth.logout();
  }

}
