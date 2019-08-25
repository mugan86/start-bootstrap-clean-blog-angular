import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { COURSES } from 'src/app/@core/components/header/header.constants';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService) {
    config.updatebgUrlSubject(COURSES.bg);
    config.updateTitleSubject(COURSES.title);
    config.updateSubtitleSubject(COURSES.subtitle);
    this.api.getCourse().subscribe(data => {
      console.log(data);
    });
  }

}
