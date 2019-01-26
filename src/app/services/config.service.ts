import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Use to share info about background URL
  public bgVar = new Subject<string>();
  public bgVar$ = this.bgVar.asObservable();

  // Use to update url when change page
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
