import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getCourse, getPosts } from '../operations/query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  private getQuery(variables: any, query: any) {
    return this.apollo.watchQuery({
      query,
      variables,
      fetchPolicy: 'network-only'
    });
  }

  getCourse() {
    return this.getQuery({}, getCourse).valueChanges.pipe(map((result: any) => {
      return result.data.courses;
    }));
  }

  getPosts(page: number, itemsPage: number) {
    return this.getQuery({page, itemsPage}, getPosts).valueChanges.pipe(map((result: any) => {
      return result.data.posts;
    }));
  }
}
