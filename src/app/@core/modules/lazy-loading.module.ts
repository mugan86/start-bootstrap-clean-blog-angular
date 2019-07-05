import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        TranslateModule.forChild()
    ],
    exports: [ TranslateModule ]
})

export class LazyLoadModule {}