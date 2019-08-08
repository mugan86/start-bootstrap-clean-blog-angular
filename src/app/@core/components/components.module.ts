import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDirectComponent } from './access-direct/access-direct.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ],
  declarations: []
})
export class ComponentsModule { }
