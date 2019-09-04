import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { CONTACT } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { ContactInterface } from './contact.interface';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';
import { NgForm } from '@angular/forms';

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
  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService, private seoTitleMetaTags: SeoTitleMetaTagsAngularService) {
    config.updatebgUrlSubject(CONTACT.bg);
    config.updateTitleSubject(CONTACT.title);
    config.updateSubtitleSubject(CONTACT.subtitle);
    config.updateInPost(false);
    this.seoTitleMetaTags.removeTags();
    const keywords = 'contacta conmigo, Anartz Mugika, colaboraciones, cursos, sugerencias de contenido';
    const description = 'Contacta conmigo para posibles colaboraciones, proyectos,...';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Contacta conmigo');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

  save(form: NgForm) {
    this.api.sendMessageContact(this.contact).subscribe(({data}: any) => {
      const contact = data.addContact;
      this.result.message = contact.message;
      this.result.status = contact.status;
      this.reset(form);
    });
  }

  reset(form: NgForm) {
    form.resetForm();
  }
}
