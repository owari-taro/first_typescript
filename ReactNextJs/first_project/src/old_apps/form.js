import "./styles.css";
import React, { useState } from "react";

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState("");
  const [text, setText] = useState("javascript");
  const handleChange = (e) => setInputTextValue(e.target.value);
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };
  return (
    <div className="App">
      <h1>love {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="入力" onCLick={handleClick} />
    </div>
  );
};

export default function App() {
  return <InputText />;
}
