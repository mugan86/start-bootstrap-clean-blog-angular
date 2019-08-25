import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getCourse } from '../operations/query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  private getQuery() {
    return this.apollo.watchQuery({
      query: getCourse,
      fetchPolicy: 'network-only'
    });
  }

  getCourse() {
    return this.getQuery().valueChanges.pipe(map((result: any) => {
      return result.data.courses;
    }));
  }
}
