import { gql } from '@apollo/client';

const isLoggedInStatus = gql`
  query getIsLoggedIn{
    getLoggedInStatus @client
  }
`
export default isLoggedInStatus