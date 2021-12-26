import logo from './logo.svg';
import './App.css';
import React ,{ useState } from "react";

function App() {
 // const [message] = useState("welcom to hooks");
  const [count, setCount] = useState(0);
  const clickFunc = () => {
    setCount(count + 1);
  }
  console.log("test");a
  
  return (
    <div>
      <h1 className="bg-primary text-white display-4">react</h1>
      <div className="constainer">
        <h4 className="my-3">hooks sample</h4>
        <div className="alert alert-primary text-center">
          <p className="h5 mb-3">click:{count} times</p>
          <div><button className="btn ntm-primary" onClick={clickFunc}>
            clickme</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
