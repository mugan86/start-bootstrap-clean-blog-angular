import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject('./assets/img/contact-bg.jpg');
  }

}
