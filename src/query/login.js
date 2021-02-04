import { gql } from '@apollo/client';

const login = gql`
  mutation login($email: String $password: String){
    login(email: $email password: $password){
      token
    }
  }
`

export default login