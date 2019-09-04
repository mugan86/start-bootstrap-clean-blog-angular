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
      this.bgUrl = data;
    });
    this.config.titleVar$.subscribe( data => {
      this.title = data;
    });
    this.config.subTitlVar$.subscribe( data => {
      this.subtitle = data;
    });
    this.config.inPostVar$.subscribe( data => {
      this.show = !data;
    });
  }

}
