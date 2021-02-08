import React, { useState } from 'react'
import { REGISTER } from "../query";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ErrorModals } from '../components'

export default function Register() {

  const history = useHistory()

  const [doRegister] = useMutation(REGISTER, {
    errorPolicy: 'all',
  })

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  })

  const [modals, setModals] = useState(false)

  const changeHanlder = (e) => {
    const name = e.target.name
    const value = e.target.value

    setRegisterData({
      ...registerData,
      [name]: value
    })
  }

  const submitHandler =  async (e) => {
    e.preventDefault()
    console.log(registerData);
    try {
      const { data } = await doRegister({
        variables: {
          registerData: registerData
        }
      })
      if(data){
        history.push('/login')
      }
    } catch (error) {
      setModals(true)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <ErrorModals toggle={modals} setModals={setModals} content={"error"}/>
      <div className="col-4 text-start" style={{marginTop: "20vh"}}>
        <form autoComplete="off" onSubmit={ (e) => submitHandler(e)}>
          <div className="form-group mb-1">
            <label placeholder="email" htmlFor="email" className="form-label">
              Email
            </label>
            <input required className="form-control" type="text" name="email" value={registerData.email} onChange={ (e) => changeHanlder(e)}/>
          </div>
          <div className="form-group mb-1">
            <label placeholder="first name" htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input required className="form-control" type="text" name="firstname" value={registerData.firstname} onChange={ (e) => changeHanlder(e)}/>
          </div>
          <div className="form-group mb-1">
            <label placeholder="last name" htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input required className="form-control" type="text" name="lastname" autoComplete="off" value={registerData.lastname} onChange={ (e) => changeHanlder(e)}/>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input required className="form-control" type="password" autoComplete="off" name="password" value={registerData.password} onChange={ (e) => changeHanlder(e)}/>
          </div>
          <div className="text-center mt-3">
            <input type="submit" value="register"/>
          </div>
        </form>
      </div>
    </div>
  )
}
