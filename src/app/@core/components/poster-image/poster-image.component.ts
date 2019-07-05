import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-poster-image',
  templateUrl: './poster-image.component.html',
  styleUrls: ['./poster-image.component.css']
})
export class PosterImageComponent implements OnInit {
  @Input() classValues: string;
  @Input() src: string;
  constructor() { }

  ngOnInit() {
  }

}
