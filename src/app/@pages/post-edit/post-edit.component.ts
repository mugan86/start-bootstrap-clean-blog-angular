import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(private translateService: TranslateConfigService) { }

  ngOnInit() {
  }

}
