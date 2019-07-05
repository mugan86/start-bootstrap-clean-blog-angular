import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedPagesModule } from '../shared-pages.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    SharedPagesModule,
    CoursesRoutingModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
