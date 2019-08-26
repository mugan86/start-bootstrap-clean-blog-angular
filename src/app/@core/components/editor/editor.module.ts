import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { EditorComponent } from './editor.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule, FormsModule, CKEditorModule
  ],
  exports: [EditorComponent]
})
export class EditorModule { }
