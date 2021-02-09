import { gql } from '@apollo/client';

//a query to load user sheets and data after the homepage is mounted
const load = gql`
query loadData{
  loadData{
    id
    firstname
    lastname
    email
    Sheets{
      id
      title
    }
  }
}
`

export default load