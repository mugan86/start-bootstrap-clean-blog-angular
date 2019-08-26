import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedPagesModule } from '../shared-pages.module';
import { EditorModule } from 'src/app/@core/components/editor/editor.module';

@NgModule({
  declarations: [PostComponent],
  imports: [
    SharedPagesModule,
    PostRoutingModule,
    EditorModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
