import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { CONTACT } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { ContactInterface } from './contact.interface';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  result: any = {
    message: '',
    status: undefined
  };
  contact: ContactInterface = {
    name: '',
    email: '',
    message: '',
    reason: 'others',
    createdAt: new Date().toISOString()
  };
  constructor(config: ConfigService, private translateService: TranslateConfigService, private api: ApiService) {
    config.updatebgUrlSubject(CONTACT.bg);
    config.updateTitleSubject(CONTACT.title);
    config.updateSubtitleSubject(CONTACT.subtitle);
  }

  save() {
    this.api.sendMessageContact(this.contact).subscribe(({data}: any) => {
      const contact = data.addContact;
      this.result.message = contact.message;
      this.result.status = contact.status;
    });
  }
}
