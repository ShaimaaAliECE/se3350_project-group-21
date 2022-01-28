import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Levels from "./pages/Levels";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path='/' exact element={<Dashboard/>} />
         <Route path='/levels' element={<Levels/>} />
      </Routes>
    </Router>
  );
}

export default App;
