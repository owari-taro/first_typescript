import React, { useState, useEffect } from "react";
import "./App.css";

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.msg}</h5>
  </div>
}
function App() {
  const [val, setval] = useState(0);
  const [tax1, setTax1] = useState(0);
  const [tax2, setTax2] = useState(0);
  const [msg, setMsg] = useState(<p>set a price.../.</p>);

  const doChange=(event) => {
    setval(event.target.value);
  }

  useEffect(() => {
      let res = <div>
      <p>軽減税率8%:{tax1}円</p>
      <p>軽減税率10%:{tax2}円</p>
    </div>
    setMsg(res);
  },[tax1,tax2])

  useEffect(() => {
    setTax1(Math.floor(val * 1.08));
    console.log(tax1);
  })
  useEffect(() => {
    setTax2(Math.floor(val * 1.1));
  })
  return (
    <div>
      <h1 className="bg-primary text-white display-4">react</h1>
      <div className="container">
        <h4 className="my-3">hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>input:</label>
          <input type="number" className="form-control" onChange={doChange} />
        </div>
      </div>
    </div>
  )

}
export default App;