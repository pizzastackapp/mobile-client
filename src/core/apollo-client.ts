import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { HASURA_URL } from '@env';

const httpLink = new HttpLink({
  uri: HASURA_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
