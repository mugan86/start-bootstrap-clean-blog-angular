import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service to configure theme need values and properties
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Use to share info about background URL
  /**
   * @ignore
   */
  public bgVar = new Subject<string>();
  /**
   * @ignore
   */
  public bgVar$ = this.bgVar.asObservable();
  /**
   * @ignore
   */
  public subtitleVar = new Subject<string>();
  /**
   * @ignore
   */
  public subtitleVar$ = this.subtitleVar.asObservable();

  /**
   * Use to update url when change page
   * @param newUrl Background apply new url
   */
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }

  public updatesubtitleVarSubject(newSubtitle: string) {
    this.subtitleVar.next(newSubtitle);
  }
}
