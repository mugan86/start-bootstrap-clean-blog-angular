import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ConfigService } from 'src/app/@core/services/config.service';
import { PORTFOLIO } from 'src/app/@core/components/header/header.constants';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';

@Component({
  selector: 'blog-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private translateService: TranslateConfigService, private config: ConfigService,
    private seoTitleMetaTags: SeoTitleMetaTagsAngularService) { }

  ngOnInit() {
    this.config.updatebgUrlSubject(PORTFOLIO.bg);
    this.config.updateTitleSubject(PORTFOLIO.title);
    this.config.updateSubtitleSubject(PORTFOLIO.subtitle);
    this.seoTitleMetaTags.removeTags();
    const keywords = 'proyectos, Anartz Mugika, android, angular, librerías, cursos, sugerencias de contenido';
    const description = 'Lista de los proyectos en los que he trabajado';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Proyectos');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

}
