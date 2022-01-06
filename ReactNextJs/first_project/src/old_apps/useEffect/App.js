import React { useState, useEffect } from "react";
import "./styles.css";
import { useEffect } from "react/cjs/react.production.min";

const INITIAL_COUNT = 0;
const Timer = () => {
    const [count, setCount] = useState(INITIAL_COUNT);
    const countReset = () => {
        setCount(INITIAL_COUNT);
    }
    const countIncrement=()=>{
        setCount((prevCount) => prevCount+1);
        console.log("countup +1");
    }
    const callbackFunction = () => {
        alert("副作用ー実行！")
        const timer = setInterval(countIncrement, 1000);
        return () => {
            console.log("timer deleted");
            clearInterval(timer);
        };
    }
    useEffect(callbackFunction, []);
    return (<div className="App">
        <p>count;{count}</p>
        <button onClick={countReset}>reset</button>
    </div>
    )
}

export default function App() {
    const [display, toggleDisplay] = useState(false);
    const handleToggleDisplay = () => {
        toggleDisplay(!display);
    };
    return (<>
        <button onClick={handleToggleDisplay}>
            {display? "timer非表示":"timer is displayed"}
            </button>
            {display&&<Timer />}
            </>)
}