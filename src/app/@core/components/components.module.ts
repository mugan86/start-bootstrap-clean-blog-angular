import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [],
  exports: [
    SidebarModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ]
})
export class ComponentsModule { }
