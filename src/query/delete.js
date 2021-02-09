import { gql } from '@apollo/client';

//mutation to delete a sheet
const deleteSheet = gql`
mutation delete($id: ID){
  delete(id: $id){
    msg
  }
}
`

export default deleteSheet