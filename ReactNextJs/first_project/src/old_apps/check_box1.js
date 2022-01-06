import React, { useState } from "react";
import "./styles.css";

const values = ["mouse", "monitor", "keyboard"];

const CheckBtnItems = ({ onChange, checked }) => {
    return values.map((value,i) => {
        return (<label key={i}>
            <input type="checekbox" value={value}
                onChange={onChange}
            checked={checked.includes(value)}
            />
            {value}
        </label>)
    })
}
const InputCheckBox = () => {
    const [checkedValues, setCheckedValues] = useState([]);
    const handleChange = (e) => {
        if (checkedValues.inludes(e.target.value)) {
            setCheckedValues(checkedValues.filter((checkedValue) =>
            checkedValue!==e.target.value)
            );
        }
    }   
}