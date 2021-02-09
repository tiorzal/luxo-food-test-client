import { gql } from '@apollo/client';

//a mutation to save the data
const save = gql`
mutation save($data: String $id: ID){
  update(data: $data, id: $id){
    id
    title
    data
    UserId
  }
}
`

export default save