import "./styles.css";
import React from "react";

const numbers = [2, 3, 4, 5];
const ListItems = () => {
    const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);
    console.log(numbers);

    return <ul>{items}</ul>;
};
export default function App() {
    return <ListItems />;
}
