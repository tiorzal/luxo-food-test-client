import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOAD, DELETE } from '../query'

export default function SheetCard({ sheet}) {

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
    ]
  })

  const goToWorkPage = () => {
    console.log(sheet.id);
    history.push(`/sheet/${sheet.id}`)
  }

  const doDelete = () => {
    console.log(sheet.id);
    deleteSheet({
      variables: {
        id: sheet.id
      }
    })
  }

  return (
      <div className="row d-flex">
        <div className="col-8 text-start">
          <div>{sheet.title}</div>
        </div>
        <div className="col-4">
          <button onClick={goToWorkPage}>open</button>
          <button onClick={doDelete}>delete</button>
        </div>
      
    </div>
  )
}
