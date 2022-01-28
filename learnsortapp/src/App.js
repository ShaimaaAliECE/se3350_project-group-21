import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./navbar/Navbar";
import Dashboard from './Dashboard';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/dashboard' element = { <Dashboard/> } />
            </Routes>
        </Router>
    </>
=======
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
>>>>>>> b4455d65cc7be5ea848710f189cbbda0dcb6a623
  );
}

export default App;
