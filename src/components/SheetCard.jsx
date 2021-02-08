import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOAD, DELETE } from '../query'

export default function SheetCard({ sheet , refetchHome, noIdx}) {

  const history = useHistory()

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
          <button onClick={goToWorkPage}>open</button>
          <button onClick={doDelete}>delete</button>
        </td>
      </tr>
  )
}
