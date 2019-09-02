import { ConfigService } from './../../@core/services/config.service';
import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ABOUT } from 'src/app/@core/components/header/header.constants';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private config: ConfigService, private translateService: TranslateConfigService,
    private seoTags: SeoTitleMetaTagsAngularService) {
  }

  ngOnInit() {
    this.config.updatebgUrlSubject(ABOUT.bg);
    this.config.updateTitleSubject(ABOUT.title);
    this.config.updateSubtitleSubject(ABOUT.subtitle);
    this.config.updateInPost(false);
    this.seoTags.removeTags();
    const keywords = 'personal, Anartz Mugika, about Anartz Mugika, GraphQL, profesional, anartz mugika ledo';
    const description = 'Cursos online Anartz Mugika en anartz-mugika.com';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTags.setTitlePage('Anartz Mugika Ledo', 'Sobre Mi');
    this.seoTags.setMetaTags(keywords, description, author);
  }

}
