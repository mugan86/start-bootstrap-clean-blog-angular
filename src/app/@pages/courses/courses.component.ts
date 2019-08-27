import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { COURSES } from 'src/app/@core/components/header/header.constants';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { Course } from './courses.interface';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  loading: boolean;
  courses: Course[] = [];
  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService, private titleService: Title, private meta: Meta) {
    config.updatebgUrlSubject(COURSES.bg);
    config.updateTitleSubject(COURSES.title);
    config.updateSubtitleSubject(COURSES.subtitle);
    this.loading = true;
    this.api.getCourse().subscribe(data => {
      console.log(data);
      this.loading = false;
      this.courses = data;
    });

    // SEO
    this.translateService.getStringByLabel(COURSES.title).subscribe((data) => {
      const title = data;
      this.translateService.getStringByLabel(COURSES.subtitle).subscribe((sub) => {
        this.titleService.setTitle('Anartz Mugika Ledo - '.concat(title).concat(' - ').concat(sub));
      });
    })
    ;
    this.meta.addTag({name: 'keywords', content: 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio'});
    this.meta.addTag({name: 'description', content: 'Cursos online Anartz Mugika en anartz-mugika.com'});
    this.meta.addTag({name: 'author', content: 'mugan86'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

}
