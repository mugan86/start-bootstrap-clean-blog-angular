import { ConfigService } from './../../services/config.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() show: boolean;
  bgUrl: string;
  title: string;
  subtitle: string;
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe( data => {
      console.log('header', data);
      this.bgUrl = data;
    });
    this.config.titleVar$.subscribe( data => {
      console.log('title', data);
      this.title = data;
    });
    this.config.subTitlVar$.subscribe( data => {
      console.log('subtitle', data);
      this.subtitle = data;
    });
    this.config.inPostVar$.subscribe( data => {
      console.log('inPost', data);
      this.show = !data;
    });
  }

}
