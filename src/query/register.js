import { gql } from '@apollo/client';

const register = gql`
  mutation register($registerData: InputUser){
    register(data: $registerData){
      id
      email
      firstname
      lastname
    }
  }
`

export default register