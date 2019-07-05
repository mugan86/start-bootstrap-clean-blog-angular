import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  author = 'Anartz Mugika Ledo';

  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm'
    }
  ];
}


