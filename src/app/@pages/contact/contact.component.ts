import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { CONTACT } from 'src/app/@core/components/header/header.constants';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(config: ConfigService, private translateService: TranslateConfigService) {
    config.updatebgUrlSubject(CONTACT.bg);
    config.updateTitleSubject(CONTACT.title);
    config.updateSubtitleSubject(CONTACT.subtitle);
  }

}
