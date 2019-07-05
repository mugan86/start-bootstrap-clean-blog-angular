import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public bgVar = new Subject<string>();
  public bgVar$ = this.bgVar.asObservable();
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
