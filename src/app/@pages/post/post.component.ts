import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/@core/interfaces/api.interface';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private translateService: TranslateConfigService, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.api.getPost(params.id).subscribe(data => {
        this.post = data;
      });
  });
  }

}
