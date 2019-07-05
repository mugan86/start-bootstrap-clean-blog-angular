import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadModule } from '../@core/modules/lazy-loading.module';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadModule
  ],
  exports: [
    CommonModule,
    LazyLoadModule
  ]
})
export class SharedPagesModule { }
