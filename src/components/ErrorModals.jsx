import React from 'react'

export default function ErrorModals({ show = false, content, toggle }) {

  const toggleHandler = () => {
    toggle(false)
  }

  if(show){
    return (
      <div style={style.modal}>
        <div className="card p-2" style={style.card}>
          <div className="card-title"> Error !!</div>
          <div className="card-body p-2">
            {/* {content && content.map( (c, i) => <small key={i}>{c}</small>)} */}
            { content }
          </div>
          <div className="card-footer text-center">
            {/* <div style={style.buttonBox}> */}
              <button className="btn btn-primary" onClick={toggleHandler}>okay</button>
            {/* </div> */}
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