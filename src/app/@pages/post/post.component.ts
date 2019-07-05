import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private translateService: TranslateConfigService) { }

  ngOnInit() {
  }

}
