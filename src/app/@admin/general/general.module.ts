import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ImageCropperModule
  ],
  exports: [ GeneralComponent]
})
export class GeneralModule { }
