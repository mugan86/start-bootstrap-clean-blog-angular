import { Component, OnInit } from '@angular/core';
// Declaramos las variables para jQuery
declare var $: any;
@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 200) {
          $('#mainNav').addClass('header-paint');
      } else {
          // remove the background property so it comes transparent again (defined in your css)
         $('#mainNav').removeClass('header-paint');
      }
  });
  }

  ngOnInit() {
  }

}
