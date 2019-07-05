import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(config: ConfigService) {
    config.updatebgUrlSubject('./assets/img/home-bg.jpg');
  }
}
