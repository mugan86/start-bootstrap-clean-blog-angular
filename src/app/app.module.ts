import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { SidebarModule } from './components/sidebar/sidebar.module';

const COMPONENTS = [
  AppComponent
];

const PIPES = [
  YoutubePipe,
  DomSecurePipe
];

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
