import { Component, OnInit } from '@angular/core';
import { Login } from './login.interface';
import { TranslateConfigService } from 'src/app/@core/services/translate-config.service';
import { ConfigService } from 'src/app/@core/services/config.service';
import { LOGIN } from 'src/app/@core/components/header/header.constants';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: '',
    password: ''
  };
  show: boolean;
  constructor(private translateService: TranslateConfigService,
              private config: ConfigService, private router: Router,
              private api: ApiService, private auth: AuthService) {
    this.auth.userVar$.subscribe((data: any) => {
      if (data === null || data.status === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
    this.config.updateInPost(false);
  }

  ngOnInit() {
    this.auth.start();
    this.config.updatebgUrlSubject(LOGIN.bg);
    this.config.updateTitleSubject(LOGIN.title);
    this.config.updateSubtitleSubject(LOGIN.subtitle);
  }

  save() {
    this.api.login(this.login.username, this.login.password).subscribe( (result: any) => {
      if (result.status) {
        // this.error = false;
        localStorage.setItem('tokenJWT', result.token);
        console.log('login correcto');
        this.auth.updateStateSession(true);
        this.router.navigate(['/admin']);
      } else {
        // this.error = true;
        // this.show = true;
        this.auth.updateStateSession(false);
        localStorage.removeItem('tokenJWT');
        console.log('login incorrecto');
        // this.sendData = false;
      }
    });
  }

}
