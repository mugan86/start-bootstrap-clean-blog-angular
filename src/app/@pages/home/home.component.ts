import { ConfigService } from './../../@core/services/config.service';
import { Component, Input, HostListener } from '@angular/core';
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
  // Infinite Scroll
  finishPage: number;
  actualPage: number;
  showScrollHeight = 400;
  hideScrollHeight = 200;
  private showGoUpButton: boolean;
  constructor(config: ConfigService, private translateService: TranslateConfigService,
    private api: ApiService, private seoTitleMetaTags: SeoTitleMetaTagsAngularService, private router: Router) {
    config.updatebgUrlSubject(HOME.bg);
    config.updateTitleSubject(HOME.title);
    config.updateSubtitleSubject(HOME.subtitle);
    config.updateInPost(false);
    this.loading = true;
    this.actualPage = 1;
    /*setTimeout(() => {
      this.loading = false;
    }, 1500);*/

    this.api.getLastImportant().subscribe(important => {
      this.important = important;
      this.loading = false;
      this.loadPosts();
    });
    this.seoTitleMetaTags.removeTags();
    const keywords = 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio, Schema, Cursos Online, Tutoriales';
    const description = 'Cursos online Anartz Mugika en anartz-mugika.com';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Blog');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

  loadPosts() {
    this.api.getPosts(this.actualPage, 3).subscribe(data => {
      console.log(data);
      this.finishPage = data.info.pages;
      console.log(this.finishPage);
      this.posts =  [...this.posts, ...data.result.filter(function(post) {
        return post.important === false;
      })];
    });
  }

  openPost(id: string) {
    this.router.navigate(['post', id]);
  }
  onScroll() {
    console.log('scroll');
    if (this.actualPage <= this.finishPage) {
      this.actualPage ++;
      this.loadPosts();
    } else {
      console.log('No more lines. Finish page!');
    }
  }
  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }
}
