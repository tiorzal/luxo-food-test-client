import React, { useEffect, useState } from 'react'
import { SheetCard, AddSheetModal } from '../components/'
import { useMutation, useQuery } from "@apollo/client";
import { LOAD } from "../query"


export default function Home() {

  const [sheets, setSheets] = useState([])
  const [addModal, setAddModal] = useState(false)

  const { data, loading, refetch } = useQuery(LOAD, {
    context: {
      headers: {
        token: localStorage.getItem("token")
      },
    },
    errorPolicy: "all"
  })

  useEffect( () => {
    if(data){
      const { loadData } = data
      console.log(loadData);
      setSheets(loadData.Sheets)
    }
  } , [data])

  const showAddModal = () => {
    setAddModal(true)
  }

  if(loading){
    return <h1>LOADING...</h1>
  } else return (
    <div>
      <AddSheetModal status={addModal} setToggle={setAddModal} message="add a new sheet" doFunction={refetch}/>
      <div className="">
        <div className="row">
          <div className="col-2">
            <button onClick={ () => showAddModal()}>add</button>
          </div>
          <div className="col-10">
            { sheets && sheets.map(sheet => <SheetCard key={sheet.id} sheet={sheet}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}
