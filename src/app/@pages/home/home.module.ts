import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { PosterImageModule } from 'src/app/@core/components/poster-image/poster-image.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    PosterImageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
