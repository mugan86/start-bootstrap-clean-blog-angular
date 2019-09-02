import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { COURSES } from 'src/app/@core/components/header/header.constants';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { Course } from './courses.interface';
import { Title, Meta } from '@angular/platform-browser';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  loading: boolean;
  courses: Course[] = [];
  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService, private titleService: Title, private meta: Meta,
    private seoTitleMetaTags: SeoTitleMetaTagsAngularService) {
    config.updatebgUrlSubject(COURSES.bg);
    config.updateTitleSubject(COURSES.title);
    config.updateSubtitleSubject(COURSES.subtitle);
    config.updateInPost(false);
    this.loading = true;
    this.api.getCourse().subscribe(data => {
      this.loading = false;
      this.courses = data;
    });

    this.seoTitleMetaTags.removeTags();
    const keywords = 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio, Angular, JWT';
    const description = 'Cursos online al mejor precio con Anartz Mugika Ledo';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Cursos Online al mejor precio');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

}
