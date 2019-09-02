import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/@core/interfaces/api.interface';
import { ConfigService } from 'src/app/@core/services/config.service';
import { SeoTitleMetaTagsAngularService } from 'projects/seo-title-meta-tags-angular/src/public-api';
declare var $: any;
@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  loading: boolean;
  constructor(private translateService: TranslateConfigService, private activatedRoute: ActivatedRoute,
    private api: ApiService, private config: ConfigService, private seoTitleMetaTags: SeoTitleMetaTagsAngularService) { }

  ngOnInit() {
    this.loading = true;
    $('#mainNav').addClass('header-paint');
    $('.masthead').css('display', 'none');
    this.config.updateInPost(true);
    this.activatedRoute.params.subscribe(params => {
      this.api.getPost(params.id).subscribe(data => {
        this.post = data;
        this.loading = false;
        this.addSeoInfo();
      });
    });
  }

  addSeoInfo() {
    this.seoTitleMetaTags.removeTags();
    const keywords = 'proyectos, Anartz Mugika, android, angular, librerías, cursos, sugerencias de contenido';
    const description = this.post.subtitle;
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', this.post.title);
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

}
