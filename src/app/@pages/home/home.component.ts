import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject('./assets/img/home-bg.jpg');
  }
}
