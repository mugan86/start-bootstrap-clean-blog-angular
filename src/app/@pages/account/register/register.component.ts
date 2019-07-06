import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { Register } from './register.interface';

@Component({
  selector: 'blog-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register = {
    username: '',
    email: '',
    name: '',
    lastname: '',
    role: 4,
    password: ''
  };
  constructor(private translateService: TranslateConfigService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.register);
  }

}
