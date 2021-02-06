import React, { useState, useEffect } from 'react'
import { Luckysheet } from '../components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { FIND_BY_ID } from '../query'

export default function WorkPage() {
  const { id } = useParams()

  const [localData, setLocalData] = useState({})
  const {data, loading} = useQuery(FIND_BY_ID, {
    context: {
      headers: {
        token: localStorage.getItem('token')
      }
    },
    variables: {
      id
    }
  })

  useEffect( () => {
    if(data){
      setLocalData(data.findbyid)
    }
  }, [data])

  if(loading){
    return <h1>loading...</h1>
  } else return (
    <div>
      <Luckysheet data={localData}/>
    </div>
  )
}
