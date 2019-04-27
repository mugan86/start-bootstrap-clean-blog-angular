import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private config: ConfigService) { }
  ngOnInit() {
    this.config.updatebgUrlSubject('./assets/img/about-bg.jpg');
    this.config.updatesubtitleVarSubject('Sobre mi');
  }
}
