import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateCustomModule } from '../../modules/translate-custom.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateCustomModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
