import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject('./assets/img/about-bg.jpg');
  }

}
