import React, { useState, useEffect } from "react";
import "./App.css";

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.msg}</h5>
  </div>
}

function App() {
  const [val, setVal] = useState(0);
  const [msg, setMsg] = useState("set a number");
  
  const doChange=(event) => {
    setVal(event.target.value)
  }
  useEffect(() => {
    let total = 0;
    for (let i = 0; i <= val; i++){
      total += i;
    }
    setMsg("total:" + total + ".");
  })
  return (
    <div>
      <h1 className="bg-primary text-white display-4">react</h1>
      <div className="container">
        <h4 className="my-3">hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label >input</label>
          <input type="number" className="form-contrtol" onChange={doChange} />
        </div>
      </div>
    </div>
  )

}

export default App;z