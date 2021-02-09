import { gql } from '@apollo/client';

//a mutation for login
const login = gql`
  mutation login($email: String $password: String){
    login(email: $email password: $password){
      token
    }
  }
`

export default login