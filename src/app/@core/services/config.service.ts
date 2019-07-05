import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public bgVar = new Subject<string>();
  public bgVar$ = this.bgVar.asObservable();
  public titleVar = new Subject<string>();
  public titleVar$ = this.titleVar.asObservable();
  public subTitleVar = new Subject<string>();
  public subTitlVar$ = this.subTitleVar.asObservable();
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
  public updateTitleSubject(newTitle: string) {
    this.titleVar.next(newTitle);
  }
  public updateSubtitleSubject(newSubtitle: string) {
    this.subTitleVar.next(newSubtitle);
  }
}
