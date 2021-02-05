import { gql } from '@apollo/client';

const load = gql`
query loadData{
  loadData{
    id
    firstname
    lastname
    email
    data
  }
}
`

export default load