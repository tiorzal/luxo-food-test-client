import { gql } from '@apollo/client';

//query to create a sheet
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