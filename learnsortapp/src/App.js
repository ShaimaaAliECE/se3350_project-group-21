import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./navbar/Navbar";
import Dashboard from './pages/Dashboard';
import Levels from './pages/Levels';
import Level1 from './MergeSort-Lvl1/Level1';
import MergeSortComponent from './MergeSort-Lvl1/MergeSortComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Levels' element={<Levels />} />
          <Route path='/Level1' element={<Level1 />} />
          <Route path='/MergeSortComponent' element={<MergeSortComponent />} />
        </Routes>

      </Router>
      </>
  );
}

export default App;
