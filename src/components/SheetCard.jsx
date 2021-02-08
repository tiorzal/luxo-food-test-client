import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOAD, DELETE } from '../query'
import ConfirmModals from './ConfirmModals'

export default function SheetCard({ sheet , refetchHome, noIdx}) {

  const history = useHistory()

  const [toggle, setToggle] = useState(false)

  const [deleteSheet] = useMutation(DELETE, {
    context: {
      headers: {
        token: localStorage.getItem('token')
      }
    },
    errorPolicy: 'all',
    refetchQueries: [
      {
        query: LOAD, 
        context: {
          headers: {
            token: localStorage.getItem('token')
          }
        }}
    ],
    onCompleted: () => {
      refetchHome()
    }
  })

  const goToWorkPage = () => {
    history.push(`/sheet/${sheet.id}`)
  }

  const doDelete = () => {
    setToggle(true)
  }

  const executeDelete = () => {
    deleteSheet({
      variables: {
        id: sheet.id
      }
    })
  }

  return (
      <tr>
        <td>
          {noIdx + 1}
        </td>
        <td>
          <div>{sheet.title}</div>
        </td>
        <td>
          <button className="btn btn-primary mx-2" onClick={goToWorkPage}>open</button>
          <button className="btn btn-danger" onClick={doDelete}>delete</button>
          <ConfirmModals status={toggle} setToggle={setToggle} doFunction={executeDelete} message="are you sure ?"/>
        </td>
      </tr>
  )
}
