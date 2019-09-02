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
  public currentRouterVar = new Subject<string>();
  public currentRouterVar$ = this.currentRouterVar.asObservable();
  public inPostVar = new Subject<boolean>();
  public inPostVar$ = this.inPostVar.asObservable();
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
  public updateTitleSubject(newTitle: string) {
    this.titleVar.next(newTitle);
  }
  public updateSubtitleSubject(newSubtitle: string) {
    this.subTitleVar.next(newSubtitle);
  }
  public updateCurrentRoute(route: string) {
    this.currentRouterVar.next(route);
  }
  public updateInPost(inpost: boolean) {
    this.inPostVar.next(inpost);
  }
}
