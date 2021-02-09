import { gql } from '@apollo/client';

//a query to check logged in user status
const isLoggedInStatus = gql`
  query getIsLoggedIn{
    getLoggedInStatus @client
  }
`
export default isLoggedInStatus