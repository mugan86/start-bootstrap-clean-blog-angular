import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() to: string;
  @Input() param: string;
  @Input() title: string;
  constructor(private router: Router) { }
  open(to: string, param: string) {
    this.router.navigate([to, param]);
  }

}
