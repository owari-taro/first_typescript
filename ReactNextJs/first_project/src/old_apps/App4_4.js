import React, { useState } from "react";
import "./App.css";


function AlertMessage() {
  return <div className="alert alert-primary h5 text-primary">
    this is alert message!</div>
}

function CardMessage() {
  return <div className="card p-3 h5 border-primary text-center"> this is card message!</div>
}

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">react</h1>
      <div className="container">
        <h4 className="my-3"> hooks sample</h4>
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  )
}

export default App