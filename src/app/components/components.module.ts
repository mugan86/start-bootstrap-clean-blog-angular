import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components.constants';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule
    ],
    declarations: [
        COMPONENTS
    ],
    exports: [
        COMPONENTS
    ]
})
export class ComponentsModule { }
