import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

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
      url: 'https://www.udemy.com/',
      path: 'user/anartzmugika',
      icon: 'fas fa-graduation-cap',
      description: 'footer.udemy'
    },
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter',
      description: 'footer.twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github',
      description: 'footer.github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin',
      description: 'footer.linkedin'
    },
    {
      url: 'https://play.google.com/',
      path: 'store/apps/developer?id=Anartz+Muxika&hl=es_419',
      icon: 'fab fa-google-play',
      description: 'footer.gplay'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog',
      description: 'footer.bintray'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm',
      description: 'footer.npm'
    },
    {
      url: 'https://www.youtube.com/',
      path: 'mugan86',
      icon: 'fab fa-youtube',
      description: 'footer.youtube'
    }
  ];

  constructor(private translate: TranslateConfigService) {}
}


