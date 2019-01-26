import { ConfigService } from './../../services/config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(config: ConfigService) {
    config.updatebgUrlSubject('./assets/img/contact-bg.jpg');
  }

}
