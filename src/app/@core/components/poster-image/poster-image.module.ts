import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterImageComponent } from './poster-image.component';

@NgModule({
  declarations: [PosterImageComponent],
  imports: [
    CommonModule
  ],
  exports: [PosterImageComponent],
})
export class PosterImageModule { }
