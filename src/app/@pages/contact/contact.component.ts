import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { CONTACT } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message: any = {
    name: '',
    email: '',
    message: ''
  };
  constructor(config: ConfigService, private translateService: TranslateConfigService, private api: ApiService) {
    config.updatebgUrlSubject(CONTACT.bg);
    config.updateTitleSubject(CONTACT.title);
    config.updateSubtitleSubject(CONTACT.subtitle);
  }

  save() {
    console.log(this.message);
    const contact = {
        name: 'dddd',
        email: 'a@a.com',
        message: 'djdjdjdjd',
        createdAt: 'dddd'
    };
    this.api.sendMessageContact(contact).subscribe(({data}) => {
      console.log(data);
    });
  }

}
