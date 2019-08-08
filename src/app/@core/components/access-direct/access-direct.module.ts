import { NgModule } from '@angular/core';
import { AccessDirectComponent } from './access-direct.component';
import { PosterImageModule } from '../poster-image/poster-image.module';

@NgModule({
  imports: [
    PosterImageModule
  ],
  declarations: [AccessDirectComponent],
  exports: [
    AccessDirectComponent
  ]
})
export class AccessDirectModule { }
