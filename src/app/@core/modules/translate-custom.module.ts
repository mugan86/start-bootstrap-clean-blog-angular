import { NgModule } from '@angular/core';

// To Translate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../services/translate-loader-config-service';
import { TranslateConfigService } from '../services/translate-config.service';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class TranslateCustomModule {
  static forRoot(languageCodes?: string[], defaultLang?: string) {
    return {
      ngModule: TranslateCustomModule,
      providers: [TranslateConfigService, { provide: 'config', useValue: { default: defaultLang, codes: languageCodes } }]
    };
  }
}