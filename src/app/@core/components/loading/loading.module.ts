import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    CommonModule,
    LoadingComponent
  ]
})
export class LoadingModule { }
