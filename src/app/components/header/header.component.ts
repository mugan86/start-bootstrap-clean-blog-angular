import { ConfigService } from './../../services/config.service';
import { Component } from '@angular/core';

/**
 * Header component
 */
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * Background url to add and load background depending Page
   */
  bgUrl: string;
  sectionTitle: string;
  /**
   * Add config data
   * @param config Inject Config service to listen changes in background url
   */
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe( data => {
      console.log('header', data);
      this.bgUrl = data;
    });
    this.config.subtitleVar$.subscribe( data => {
      console.log('header', data);
      this.sectionTitle = data;
    });

    if (this.sectionTitle === undefined && this.bgUrl === undefined) {
      this.config.updatebgUrlSubject('./assets/img/about-bg.jpg');
      this.config.updatesubtitleVarSubject('Sobre mi');
    }
  }

}
