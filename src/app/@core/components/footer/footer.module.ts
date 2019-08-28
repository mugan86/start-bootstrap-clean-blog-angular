import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateCustomModule } from '../../modules/translate-custom.module';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    TranslateCustomModule
  ],
  exports: [FooterComponent]

})
export class FooterModule { }
