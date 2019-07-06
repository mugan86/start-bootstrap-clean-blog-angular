import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedPagesModule } from '../../shared-pages.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedPagesModule,
    LoginRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class LoginModule { }
