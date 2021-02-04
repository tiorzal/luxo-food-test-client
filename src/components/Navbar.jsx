import userEvent from '@testing-library/user-event'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  const history = useHistory()

  const logoutHandler = () => {
    localStorage.clear()
    history.push('/login')
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand"> Luxo Food </div>
        <div>
          <NavLink to="Login" className="mx-2">Login</NavLink>
          <button className="btn btn-primary" onClick={logoutHandler}>logout</button>
          <NavLink to="Register" className="mx-2">Register</NavLink>
          <NavLink to="Home" className="mx-2">Home</NavLink>
        </div>
      </div>
    </div>
  )
}