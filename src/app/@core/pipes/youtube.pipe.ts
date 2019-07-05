import { YOUTUBE_EMBED } from './../constants/urls';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSecurePipe } from './dom-secure.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: any): any {
    return new DomSecurePipe(this.domSanitizer).transform(value, YOUTUBE_EMBED) ;
  }
}
