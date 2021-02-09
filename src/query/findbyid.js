import { gql } from '@apollo/client';

//query to find a sheet by id, use to fetch a single sheet data
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