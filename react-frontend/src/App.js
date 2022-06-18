import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  function loginUser(){
    console.log("working");
  };


  return (
    <BrowserRouter>
    <Header />
    <Route path="/"
           element = {
            <Form login = {loginUser}/>
           }
    ></Route>
    </BrowserRouter>
  );
}

export default App;
