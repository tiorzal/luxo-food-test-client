import { gql } from '@apollo/client';

const create = gql`
  mutation create($createData: InputSheet){
    create(data: $createData){
      title
      data
      UserId
    }
  }
`

export default create