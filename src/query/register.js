import { gql } from '@apollo/client';

//a mutation for register
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