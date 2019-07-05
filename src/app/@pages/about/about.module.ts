import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SidebarModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
