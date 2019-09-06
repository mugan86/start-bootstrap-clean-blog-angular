import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { meData } from 'src/app/@graphql/operations/query';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessVar = new Subject<boolean>();
  public accessVar$ = this.accessVar.asObservable();
  public userVar = new Subject<any>();
  public userVar$ = this.userVar.asObservable();
  constructor(private apollo: Apollo, private router: Router) { }

  public updateStateSession(newValue: boolean) {
    this.accessVar.next(newValue);
  }
  public updateUser(newValue: any) {
    this.userVar.next(newValue);
  }

  logout() {
    this.updateStateSession(false);
    localStorage.removeItem('tokenJWT');
    const currentRouter = this.router.url;
    console.log('rrr0', currentRouter);
    if (currentRouter === '/admin' || currentRouter.indexOf('/admin/') > -1) {
      this.router.navigate(['/login']);
    }
  }

  private sincroValues(result: any, state: boolean) {
    this.updateStateSession(state);
    this.updateUser(result);
  }

  start() {
    if (localStorage.getItem('tokenJWT') !== null ) {
      this.getMe().subscribe((result: any) => {
        if (result.status) {
          if (this.router.url === '/login') {
            this.sincroValues(result, true);
            this.router.navigate(['/admin']);
          }
        }
        this.sincroValues(result, result.status);
      });
    } else { // No hay token
      this.sincroValues(null, false);
    }
  }
  // Obtener nuestro usuario y datos con el token
  getMe() {
    return this.apollo
    .watchQuery(
      {
        query: meData,
        fetchPolicy: 'network-only',
        context: {
          headers: new HttpHeaders({
            authorization: localStorage.getItem('tokenJWT')
          })
        }
      }
    ).valueChanges.pipe(map((result: any) => {
      return result.data.me;
    }));
  }
}
