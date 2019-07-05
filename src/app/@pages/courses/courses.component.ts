import { Component } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';

@Component({
  selector: 'blog-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(config: ConfigService) {
    config.updatebgUrlSubject('./assets/img/home-bg.jpg');
  }

}
