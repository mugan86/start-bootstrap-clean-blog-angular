import { Component, OnInit } from '@angular/core';
import { Login } from './login.interface';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: '',
    password: ''
  }
  constructor(private translateService: TranslateConfigService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.login);
  }

}
