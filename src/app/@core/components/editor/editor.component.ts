import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'blog-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log = '';
  @ViewChild('myckeditor', {static: false}) ckeditor: any;

  constructor() {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log('onChange');
    console.log(this.mycontent);
  }

}
