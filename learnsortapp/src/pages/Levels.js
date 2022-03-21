import React from 'react';
import { Link } from 'react-router-dom';
import './Levels.css'

function Levels() {
    return (
      <div className="contents">
         <h1 className = "title">MergeSort</h1>
         <h2 className = "title-background" />

         <div className = "sort-levels-box">
            <Link to='/Level1' class="sort-levels">
               <div className = "level-box">
                  <p class= "level-text">Level 1</p>
               </div>
            </Link>
            <Link to='/Level2' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 2</p>
               </div>
            </Link>
            <Link to='/Level3' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 3</p>
               </div>
            </Link>
            <Link to='/Level4' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 4</p>
               </div>
            </Link>
            <Link to='/Level5' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 5</p>
               </div>
            </Link>
            <Link to='/Custom' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Custom Level</p>
               </div>
            </Link>
         </div>
      </div>
    );
}

export default Levels