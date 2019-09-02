import { ConfigService } from './../../@core/services/config.service';
import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { HOME } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { Post } from 'src/app/@core/interfaces/api.interface';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading: boolean;
  posts: Post[] = [];
  important: Post;
  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService, private seoTitleMetaTags: SeoTitleMetaTagsAngularService, private router: Router) {
    config.updatebgUrlSubject(HOME.bg);
    config.updateTitleSubject(HOME.title);
    config.updateSubtitleSubject(HOME.subtitle);
    config.updateInPost(false);
    this.loading = true;
    /*setTimeout(() => {
      this.loading = false;
    }, 1500);*/

    this.api.getPosts(1, 5).subscribe(data => {
      this.posts =  data.results.filter(function(post) {
        return post.important === false;
      });
      this.api.getLastImportant().subscribe(important => {
        this.important = important;
        this.loading = false;
      });
    });
    this.seoTitleMetaTags.removeTags();
    const keywords = 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio, Schema, Cursos Online, Tutoriales';
    const description = 'Cursos online Anartz Mugika en anartz-mugika.com';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Blog');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

  openPost(id: string) {
    this.router.navigate(['post', id]);
  }
}
