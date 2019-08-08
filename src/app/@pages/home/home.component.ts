import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { HOME } from 'src/app/@core/components/header/header.constants';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading: boolean;
  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject(HOME.bg);
    config.updateTitleSubject(HOME.title);
    config.updateSubtitleSubject(HOME.subtitle);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
