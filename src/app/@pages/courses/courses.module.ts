import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedPagesModule } from '../shared-pages.module';
import { PosterImageModule } from 'src/app/@core/components/poster-image/poster-image.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    SharedPagesModule,
    CoursesRoutingModule,
    PosterImageModule,

  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
