import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostEditRoutingModule } from './post-edit-routing.module';
import { SharedPagesModule } from '../shared-pages.module';
import { EditorModule } from 'src/app/@core/components/editor/editor.module';
import { PostEditComponent } from './post-edit.component';

@NgModule({
  declarations: [PostEditComponent],
  imports: [
    CommonModule,
    PostEditRoutingModule,
    SharedPagesModule,
    EditorModule
  ],
  exports: [PostEditComponent]
})
export class PostEditModule { }
