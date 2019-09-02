import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
// Declaramos las variables para jQuery
declare var $: any;
@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  access: boolean;
  constructor(private auth: AuthService, private config: ConfigService) {
    this.auth.accessVar$.subscribe((data: boolean) => {
      console.log('session state', data);

      if (data === false && this.access) {
        this.access = false;
        this.logout();
      } else {
        this.access = data;
      }
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
    this.auth.start();
  }
}
