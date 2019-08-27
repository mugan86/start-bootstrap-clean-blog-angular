import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { HOME } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { Post } from 'src/app/@core/interfaces/api.interface';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading: boolean;
  posts: Post[] = [];
  constructor(config: ConfigService, private translateService: TranslateConfigService, private api: ApiService) {
    config.updatebgUrlSubject(HOME.bg);
    config.updateTitleSubject(HOME.title);
    config.updateSubtitleSubject(HOME.subtitle);
    this.loading = true;
    /*setTimeout(() => {
      this.loading = false;
    }, 1500);*/

    this.api.getPosts(1, 5).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.posts = data.posts;
    });
  }
}
