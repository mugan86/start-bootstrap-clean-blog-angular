import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedPagesModule } from '../shared-pages.module';

@NgModule({
  declarations: [PostComponent],
  imports: [
    SharedPagesModule,
    PostRoutingModule,
  ],
  exports: [PostComponent]
})
export class PostModule { }
