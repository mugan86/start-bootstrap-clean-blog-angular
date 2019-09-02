import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedPagesModule } from '../shared-pages.module';
import { AccessDirectModule } from 'src/app/@core/components/access-direct/access-direct.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedPagesModule,
    AccessDirectModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
