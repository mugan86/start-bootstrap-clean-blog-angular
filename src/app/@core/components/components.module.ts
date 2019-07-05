import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishInfoComponent } from './publish-info/publish-info.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [PublishInfoComponent]
})
export class ComponentsModule { }
