import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { COURSES } from 'src/app/@core/components/header/header.constants';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(config: ConfigService) {
    config.updatebgUrlSubject(COURSES.bg);
    config.updateTitleSubject(COURSES.title);
    config.updateSubtitleSubject(COURSES.subtitle);
  }

}
