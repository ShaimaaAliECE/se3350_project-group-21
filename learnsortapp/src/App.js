import React from 'react';
import { Router, Route,Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Level4 from './Lvl4-MergeSort/Level4'
import Level5 from './Lvl5-MergeSort/Level5'
import MergeSortComponent4 from './Lvl5-MergeSort/MergeSortComponent4';
import Custom from './LvlCustom-MergeSort/Custom'
import AboutUs from './pages/AboutUs';
import LogOut from './pages/LogOut';

import AudioTest from './AudioFeedback/AudioTest';


function App() {
  return (
    <>
    <HashRouter>
    {/* <Router> */}
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
          <Route path='/Level4' element={<Level4 />} />
          <Route path='/Level5' element={<Level5 />} />
          <Route path='/MergeSortComponent4' element={<MergeSortComponent4 />} />
          <Route path='/Custom' element={<Custom />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/LogOut' element={<LogOut />} />

          <Route path='/audiotest' element={<AudioTest />} />
        </Routes>
      {/* </Router> */}

    </HashRouter>
      </>
  );
}

export default App;
