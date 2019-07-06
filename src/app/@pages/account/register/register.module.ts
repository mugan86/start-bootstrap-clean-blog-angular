import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedPagesModule } from '../../shared-pages.module';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    SharedPagesModule,
    FormsModule,
    RouterModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
