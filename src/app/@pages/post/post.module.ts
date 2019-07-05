import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { LazyLoadModule } from '../../@core/modules/lazy-loading.module';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    LazyLoadModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
