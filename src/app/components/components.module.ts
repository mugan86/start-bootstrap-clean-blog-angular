import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ]
})
export class ComponentsModule { }
