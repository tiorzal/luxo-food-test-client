import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isLoggedInVar } from '../cache' 

//instanceciate a new appollo client
//getLoggedInstatus is a cachge function to see if the user is currently loggin or not
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
