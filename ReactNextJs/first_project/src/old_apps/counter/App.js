import React, { useState } from "react";
import "./style.css";
import { Hello } from "./Hello";
const INITIAL_NAME="javascript"

export default function App() {
    const [name, setName] = useState(INITIAL_NAME);
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    return (<Hello 
        name={name}
        handleChangeName={handleChangeName}
        initialName={INITIAL_NAME})
}
