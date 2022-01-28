import React from 'react';
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
  );
}

export default App;
