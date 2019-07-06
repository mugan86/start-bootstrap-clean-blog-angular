import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { COURSES } from 'src/app/@core/components/header/header.constants';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject(COURSES.bg);
    config.updateTitleSubject(COURSES.title);
    config.updateSubtitleSubject(COURSES.subtitle);
  }

}
