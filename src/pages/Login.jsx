import React, { useState } from "react";
import { LOGIN } from "../query";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { isLoggedInVar } from '../cache'
import { StaticContentLogin } from '../components'
import { ErrorModals } from '../components'

export default function Login() {
  const history = useHistory();
  
  const [loginData, setLoginData] = useState({
    email : '',
    password: ''
  })
  const [modals, setModals] = useState(false)

  const [doLogin] = useMutation(LOGIN, { 
    errorPolicy: 'all',
    onCompleted: () => {
      // isLoggedInVar(true)
    }
  })

  const changeHanlder = (e) => {
    const name = e.target.name
    const value = e.target.value

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await doLogin({
        variables: loginData
      })
  
      if(data.login.token){
        localStorage.setItem('token', data.login.token)
        isLoggedInVar(true)
        history.push('/')
      }
    } catch (error) {
      console.log(error);
      setModals(true)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-stretch" style={{marginTop: "20vh"}}>
        <ErrorModals show={modals} toggle={setModals} content={"invalid email/password"}/>
        <div className="col-6 text-start">
          <StaticContentLogin/>
        </div>
        <div className="col-6 text-start">
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="form-group mb-1">
                <label placeholder="email" htmlFor="email" className="form-label">
                  Email
                </label>
                <input className="form-control" type="text" name="email" value={loginData.email} onChange={(e) => changeHanlder(e)} />
              </div>
              <div className="form-group mb-1">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input className="form-control" type="password" name="password" value={loginData.password} onChange={(e) => changeHanlder(e)}/>
              </div>
              <div>
                <Link to="/register">Register</Link>
              </div>
              <div className="text-center mt-2">
                <input type="submit" className="btn btn-primary" value="login" />
              </div>
            </form>
        </div>
    </div>
  );
}
