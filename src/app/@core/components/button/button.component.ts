import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() to: string;
  @Input() param: string;
  @Input() externalUrl: string;
  @Input() title: string;
  internal: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.externalUrl === undefined) {
      this.internal = true;
      return;
    }
    this.internal = false;
  }
  open(to: string, param: string) {
    this.router.navigate([to, param]);
  }

}
