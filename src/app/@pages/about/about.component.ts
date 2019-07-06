import { ConfigService } from './../../@core/services/config.service';
import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ABOUT } from 'src/app/@core/components/header/header.constants';

@Component({
  selector: 'blog-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private config: ConfigService, private translateService: TranslateConfigService) {
  }

  ngOnInit() {
    this.config.updatebgUrlSubject(ABOUT.bg);
    this.config.updateTitleSubject(ABOUT.title);
    this.config.updateSubtitleSubject(ABOUT.subtitle);
  }

}
