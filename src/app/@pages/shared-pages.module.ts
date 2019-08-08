import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadModule } from '../@core/modules/lazy-loading.module';
import { LoadingModule } from '../@core/components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadModule,
    LoadingModule
  ],
  exports: [
    CommonModule,
    LazyLoadModule,
    LoadingModule
  ],
  declarations: []
})
export class SharedPagesModule { }
