import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
      }
      if (networkError) {
        console.log('networkError', networkError);
      }
    });
    const LOCALHOST = 'http://localhost:5300/graphql';
    const PRODUCTION = 'https://personal-graphql-api.herokuapp.com/graphql';
    const link = ApolloLink.from([errorLink, httpLink.create({ uri: LOCALHOST})]);
    apollo.create({
      link,
      cache: new InMemoryCache()
    });
  }
}
