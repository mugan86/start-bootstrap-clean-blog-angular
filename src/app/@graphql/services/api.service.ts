import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getCourse, getPosts, login, mostImportantPostData, selectPost, getPortfolioData } from '../operations/query';
import { addMessage } from '../operations/mutation';
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

  private setMutation(variables: any, mutation: any) {
    return this.apollo.mutate({
      mutation,
      variables
    });
  }

  getCourse() {
    return this.getQuery({}, getCourse).valueChanges.pipe(map((result: any) => {
      return result.data.courses;
    }));
  }

  getPosts(page: number, itemsPage: number) {
    return this.getQuery({ page, itemsPage }, getPosts).valueChanges.pipe(map((result: any) => {
      return result.data.posts;
    }));
  }

  login(email: string, password: string) {
    return this.getQuery({ email, password }, login).valueChanges.pipe(map((result: any) => {
      return result.data.login;
    }));
  }

  sendMessageContact(contactValue: any) {
    return this.setMutation({ contact: contactValue }, addMessage);
  }

  getLastImportant() {
    return this.getQuery({}, mostImportantPostData).valueChanges.pipe(map((result: any) => {
      return result.data.mostImportantPost;
    }));
  }

  getPost(id: string) {
    return this.getQuery({ id }, selectPost).valueChanges.pipe(map((result: any) => {
      return result.data.post;
    }));
  }

  getPortfolio(important: string) {
    return this.getQuery({ id: important}, getPortfolioData).valueChanges.pipe(map((result: any) => {
      return result.data;
    }));
  }
}
