import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOAD, DELETE } from '../query'
import ConfirmModals from './ConfirmModals'

//a card used on home page to represent everysheet that user have
export default function SheetCard({ sheet , refetchHome, noIdx}) {

  const history = useHistory()

  //local state for modal toggling
  const [toggle, setToggle] = useState(false)

  //mutation function for deleting a sheet
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

  //hanlder to push the page into work page
  const goToWorkPage = () => {
    history.push(`/sheet/${sheet.id}`)
  }

  //a function to show delete confirmation modal
  const doDelete = () => {
    setToggle(true)
  }

  //a function to delete a sheet, this function passed to modal component
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
