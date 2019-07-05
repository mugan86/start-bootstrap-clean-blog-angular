import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SidebarModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
