import { Component, OnInit } from '@angular/core';
import { Login } from './login.interface';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ConfigService } from 'src/app/@core/services/config.service';
import { LOGIN } from 'src/app/@core/components/header/header.constants';

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
  constructor(private translateService: TranslateConfigService, private config: ConfigService) { }

  ngOnInit() {
    this.config.updatebgUrlSubject(LOGIN.bg);
    this.config.updateTitleSubject(LOGIN.title);
    this.config.updateSubtitleSubject(LOGIN.subtitle);
  }

  save() {
    console.log(this.login);
  }

}
