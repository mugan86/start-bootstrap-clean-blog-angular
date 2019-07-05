import { FooterModule } from './@core/components/footer/footer.module';
import { HeaderModule } from './@core/components/header/header.module';
import { NavbarModule } from './@core/components/navbar/navbar.module';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CookieLawModule } from 'angular2-cookie-law';
import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { YoutubePipe } from './@core/pipes/youtube.pipe';
import { DomSecurePipe } from './@core/pipes/dom-secure.pipe';
import { SidebarModule } from './@core/components/sidebar/sidebar.module';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TranslateCustomModule } from './@core/modules/translate-custom.module';

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
    SidebarModule,
    BrowserAnimationsModule,
    CookieLawModule,
    Mugan86GoogleAnalyticsModule.forRoot(
      {
        analyticsId: 'UA-57700600-14', // Add your track id
        showLog: false
      }
    ),
    HttpClientModule,
    TranslateCustomModule.forRoot(['es', 'en', 'eu'], 'es')

  ],
  exports: [ TranslateCustomModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
