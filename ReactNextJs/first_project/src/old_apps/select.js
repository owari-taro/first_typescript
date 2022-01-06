import "./styles.css";
import React, { useState } from "react";
import { validateLocaleAndSetLanguage } from "typescript";

const values = [
    { id: 1, item: "HTML" },
    { id: 2, item: "CSS" },
    { id: 3, item: "JavaScript" }
];

const SelectItems = values.map((value, i) => {
    return (
        <option value={value.item} key={i}>
            {value.item}
        </option>
    );
});

const InputSelectBox = () => {
    const [selectedValue, setSelectedValue] = useState("hoge");
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };
    return (
        <div className="App">
            <p>
                <b>{selectedValue}</b>
            </p>
            <select value={selectedValue} onChange={handleChange}>
                {SelectItems}
            </select>
        </div>
    );
};

export default function App() {
    return <InputSelectBox />;
}
