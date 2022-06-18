import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import SignupForm from "./components/Signup-Form";

function App() {
  function loginUser(){
    
  };


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* Login route */}
      <Route 
        path="/"
        element = {
          <Form login = {loginUser}/>
        }
      ></Route>

      <Route
        path="/signup"
        element = {
          <SignupForm />
        }
      ></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
