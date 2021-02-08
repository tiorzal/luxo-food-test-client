import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isLoggedInVar } from '../cache' 

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getLoggedInStatus: {
            read: () => {
              return isLoggedInVar();
            } 
          }
        }
      }
    }
  }),
});

export default client;
