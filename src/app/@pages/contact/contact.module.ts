import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { SharedPagesModule } from '../shared-pages.module';
import { FormsModule } from '@angular/forms';
import { AccessDirectModule } from 'src/app/@core/components/access-direct/access-direct.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedPagesModule,
    ContactRoutingModule,
    AccessDirectModule,
    FormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
