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
  /**
   * Add config data
   * @param config Inject Config service to listen changes in background url
   */
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe( data => {
      console.log('header', data);
      this.bgUrl = data;
    });
  }

}
