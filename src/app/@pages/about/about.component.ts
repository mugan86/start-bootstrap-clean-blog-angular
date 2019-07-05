import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(config: ConfigService) {
    config.updatebgUrlSubject('./assets/img/about-bg.jpg');
  }

}
