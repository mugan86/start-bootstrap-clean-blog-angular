import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ConfigService } from 'src/app/@core/services/config.service';
import { PORTFOLIO } from 'src/app/@core/components/header/header.constants';

@Component({
  selector: 'blog-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private translateService: TranslateConfigService, private config: ConfigService) { }

  ngOnInit() {
    this.config.updatebgUrlSubject(PORTFOLIO.bg);
    this.config.updateTitleSubject(PORTFOLIO.title);
    this.config.updateSubtitleSubject(PORTFOLIO.subtitle);
  }

}
