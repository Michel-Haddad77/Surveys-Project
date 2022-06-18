import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  );
}

export default App;
