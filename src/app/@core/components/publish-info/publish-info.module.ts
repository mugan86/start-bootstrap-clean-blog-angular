import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadModule } from '../../modules/lazy-loading.module';
import { PublishInfoComponent } from './publish-info.component';



@NgModule({
  declarations: [PublishInfoComponent],
  imports: [
    CommonModule,
    LazyLoadModule
  ],
  exports: [PublishInfoComponent],
})
export class PublishInfoModule { }
