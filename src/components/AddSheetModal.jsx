import React,{ useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE } from '../query' 

export default function AddSheetModal({ status = false, setToggle, doFunction, message }) {
  
  const [addData, setAddData] = useState({
    title: "",
    data: ""
  })

  const [addNewSheet] = useMutation(CREATE, {
    context: {
      headers: {
        token: localStorage.getItem("token")
      }
    },
    errorPolicy: "all",
    onCompleted: () => {
      doFunction()
    }
  })

  const okHandler = async () => {
    const result = await addNewSheet({
      variables: {
        createData: addData
      }
    })
    if(result){
      setToggle(false)
    }
  }  

  const noHandler = () => {
    setToggle(false)
  }  

  const onChangeHanlder = (e) => {
    const value = e.target.value
    const name = e.target.name

    setAddData({
      ...addData,
      [name]: value
    })
  }

  if(status){
    return (
      <div style={style.modal}>
        <div className="card" style={style.card}>
          <div className="card-title">
            {message}
          </div>
          <div className="card-footer d-flex justify-content-around">
            <input required placeholder="new sheet title..." type="text" name="title" value={addData.title} onChange={(e) => onChangeHanlder(e)}/>
            <button className="btn btn-primary" onClick={okHandler}>yes</button>
            <button className="btn btn-secondary" onClick={noHandler}>no</button>
          </div>
        </div>
      </div>
    )
  }else{
    return <div></div>
  }
}


const style = {
  modal:  {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "500px"
  },
  buttonBox: {
    display: "flex",
    width: "100px",
    justifyContent: "center"
  }
}