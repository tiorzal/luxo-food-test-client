import { gql } from '@apollo/client';

const findbyid = gql`
query findbyid($id: ID){
  findbyid(id: $id){
    id
    title
    data
    UserId
  }
}
`

export default findbyid