import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// Declaramos las variables para jQuery
declare var $: any;
@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  access: boolean;
  constructor(private auth: AuthService) {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 110) {
            $('#mainNav').addClass('header-paint');
        } else {
            // remove the background property so it comes transparent again (defined in your css)
          $('#mainNav').removeClass('header-paint');
        }
    });
    this.auth.accessVar$.subscribe((data: boolean) => {
      console.log('session state', data);

      if ( data === false && this.access) {
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
