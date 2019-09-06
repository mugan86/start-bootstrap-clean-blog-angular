import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';

@Component({
  selector: 'blog-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private config: ConfigService) {
    this.config.updateInPost(true);
  }

  ngOnInit() {
  }

}
