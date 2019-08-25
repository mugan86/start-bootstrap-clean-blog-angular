import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getCourse } from '../operations/query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  private getQuery(query: any) {
    return this.apollo.watchQuery({
      query,
      fetchPolicy: 'network-only'
    });
  }

  getCourse() {
    return this.getQuery(getCourse).valueChanges.pipe(map((result: any) => {
      return result.data.courses;
    }));
  }
}
