import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { IS_LOGGED_IN_STATUS } from '../query'
import { useQuery } from '@apollo/client'
import { isLoggedInVar } from '../cache'

export default function Navbar() {
  const history = useHistory()
  //local state for logged in user status
  const [localStatus, setLocalStatus] = useState(false)
  //a query to check logged in user status on cache
  const { data } = useQuery(IS_LOGGED_IN_STATUS)

  // a use effect function to set logged in user status into local state
  useEffect(() => {
    if(data){
      setLocalStatus(data.getLoggedInStatus)
    }
  }, [data])

  // a function to do logout, set loggen user status to false, clearing localstorage, and push the page into login
  const logoutHandler = () => {
    localStorage.clear()
    isLoggedInVar(false)
    setLocalStatus(false)
    history.push('/login')
  }

  return (
    <div className="">
      <div className="navbar mx-2">
        <div className="navbar-brand"> Luxo Food</div>
        <div>
          {
            (localStatus) 
              ? <div>
                  <NavLink to="/" className="mx-2">Dashboard</NavLink>
                  <button className="btn btn-primary" onClick={logoutHandler}>logout</button>
                </div> 
              : <div>
                  {/* <NavLink to="Register" className="mx-2">Register</NavLink>
                  <NavLink to="Login" className="mx-2">Login</NavLink> */}
              </div>
          }
        </div>
      </div>
    </div>
  )
}
