import { YoutubePipe } from './youtube.pipe';
import { DomSecurePipe } from './dom-secure.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DomSecurePipe,
    YoutubePipe
  ],
  exports : [
    DomSecurePipe,
    YoutubePipe
  ]
})
export class PipesModule { }
