import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./navbar/Navbar";
import Dashboard from './pages/Dashboard';
import Levels from './pages/Levels';
import Level1 from './Lvl1-MergeSort/Level1';
import MergeSortComponent from './Lvl1-MergeSort/MergeSortComponent';
import Home from './pages/Home';
import Instructions from './pages/Instructions'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Levels' element={<Levels />} />
          <Route path='/Level1' element={<Level1 />} />
          {/* <Route path='/MergeSortComponent' element={<MergeSortComponent />} /> */}
          <Route path='/Home' element={<Home />} />
          <Route path='/MergeSortComponent' element={<MergeSortComponent />} />
          <Route path='/Instructions' element={<Instructions />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
