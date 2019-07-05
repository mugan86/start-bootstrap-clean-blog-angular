import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedPagesModule } from '../shared-pages.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedPagesModule,
    SidebarModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
