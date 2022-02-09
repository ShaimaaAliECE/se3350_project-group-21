import React from 'react';
import { Link } from 'react-router-dom';
import './Levels.css'

function Levels() {
    return (
      <div class="contents">
         <h1 class = "sort-title">MergeSort</h1>
         <h2 class = "sort-title-background" />

         <div class = "sort-levels-box">
            <Link to='/Level1' class="sort-levels">
               <div class = "level-box">
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
            <Link to='' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 4</p>
               </div>
            </Link>
            <Link to='' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Level 5</p>
               </div>
            </Link>
            <Link to='' class="sort-levels">
               <div class = "level-box">
                  <p class= "level-text">Custom Level</p>
               </div>
            </Link>
         </div>
      </div>
    );
}

export default Levels