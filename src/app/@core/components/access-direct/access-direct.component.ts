import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-access-direct',
  templateUrl: './access-direct.component.html',
  styleUrls: ['./access-direct.component.css']
})
export class AccessDirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://apis.google.com/js/platform.js';
    body.appendChild(script);
  }

}
