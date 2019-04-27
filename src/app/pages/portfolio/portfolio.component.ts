import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  compodocUrl = 'https://www.udemy.com/compodoc-crea-documentacion-en-angular-ionic/?couponCode=PROMO_COMPODOC';
  infoNpmCourse = 'https://twitter.com/mugan86/status/1121853851538268160';
  githubUserWidget = 'https://mugan86.github.io/github-api-widget/';
  angularGA = 'https://www.npmjs.com/package/mugan86-ng-google-analytics';
  constructor(private config: ConfigService) { }
  ngOnInit() {
    this.config.updatebgUrlSubject('./assets/img/about-bg.jpg');
    this.config.updatesubtitleVarSubject('Mis proyectos y cursos');
  }

}
