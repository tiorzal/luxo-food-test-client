import { gql } from '@apollo/client';

const save = gql`
mutation save($data: String){
  saveData(data: $data){
    data
  }
}
`

export default save