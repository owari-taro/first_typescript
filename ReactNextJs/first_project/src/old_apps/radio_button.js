import React, { useState } from "react";
import "./styles.css";

const values = ["red", "blue", "yellow"];
const RadioBtnItems = ({ onChange, checked }) => {
    return values.map((value, i) => {
        return (<label key={i}>
            <input type="radio" value={value}
                onChange={onChange}
                checked={checked === value}
            />
            {value}
        </label>)
    })
};

const InputRadio = () => {
    const [checkedValue, setCheckedValue] = useState("hoge");
    const handleChange = (e) => {
        setCheckedValue(e.target.value);
    }
    return (<div vlassName="App">
        <p>
            <b>{checkedValue}</b>
        </p>
        <RadioBtnItems onChange={handleChange} checked={checkedValue}/>
    </div>)
}

export default function App() {
    return <InputRadio />;
}