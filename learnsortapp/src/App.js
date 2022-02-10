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
import Level2 from './Lvl2-MergeSort/Level2';
import MergeSortComponent1 from './Lvl2-MergeSort/MergeSortComponent1';
import Login from './pages/login';
import Level3 from './Lvl3-MergeSort/Level3'
import MergeSortComponent2 from './Lvl3-MergeSort/MergeSortComponent2';
import Profile from './pages/Profile';

import AudioTest from './AudioFeedback/AudioTest';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Levels' element={<Levels />} />
          <Route path='/Level1' element={<Level1 />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/MergeSortComponent' element={<MergeSortComponent />} />
          <Route path='/Instructions' element={<Instructions />} />
          <Route path='/Level2' element={<Level2 />} />
          <Route path='/MergeSortComponent1' element={<MergeSortComponent1 />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Level3' element={<Level3 />} />
          <Route path='/MergeSortComponent2' element={<MergeSortComponent2 />} />

          <Route path='/audiotest' element={<AudioTest />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
