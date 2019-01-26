import { ConfigService } from './../../services/config.service';
import { Component } from '@angular/core';

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
