import { gql } from '@apollo/client';

const deleteSheet = gql`
mutation delete($id: ID){
  delete(id: $id){
    msg
  }
}
`

export default deleteSheet