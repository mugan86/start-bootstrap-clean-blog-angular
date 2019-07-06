import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { SharedPagesModule } from '../shared-pages.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedPagesModule,
    ContactRoutingModule,
    SidebarModule,
    FormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
