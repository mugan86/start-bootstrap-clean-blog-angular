import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Para compartir información
  public bgVar = new Subject<string>();
  public bgVar$ = this.bgVar.asObservable();
  constructor() { }
  // Create a method that allows you to update the subject being watched by observable
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
