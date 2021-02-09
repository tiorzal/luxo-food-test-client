import React from 'react'

//custom modal for confirmation
export default function ConfirmModals({ status = false, setToggle, doFunction, message }) {

  const okHandler = () => {
    doFunction()
    setToggle(false)
  }

  const noHandler = () => {
    setToggle(false)
  }

  if(status){
    return (
      <div style={style.modal}>
        <div className="card" style={style.card}>
          <div className="card-title">
            {message}
          </div>
          <div className="card-footer d-flex justify-content-around">
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
    width: "200px"
  },
  buttonBox: {
    display: "flex",
    width: "100px",
    justifyContent: "center"
  }
}