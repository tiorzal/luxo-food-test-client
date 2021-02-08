import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isLoggedInVar } from '../cache' 

const client = new ApolloClient({
  uri: 'https://luxo-sheet.herokuapp.com',
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
