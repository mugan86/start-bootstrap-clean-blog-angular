import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedPagesModule } from '../shared-pages.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    SharedPagesModule,
    PortfolioRoutingModule,
    SidebarModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
