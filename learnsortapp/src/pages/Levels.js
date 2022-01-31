import React from 'react';
import { Link } from 'react-router-dom';
import './Levels.css'

function Levels() {
    return (
      <div class="contents">
         <div class = "Rectangle15">
            <h3 class = "MergeSortText">Merge Sort</h3>
         </div>

         <div class = "Rectangle1">
            <Link to='/Level1'>
               <div class = "Rectangle2">
                  <h3 class= "Level1Text">Level 1</h3>
               </div>
            </Link>

            <Link to = ''>
               <div class = 'RectangleLvl2'>
                  <h3 class = "Level2Text">Level 2 (Coming Soon)</h3>
               </div>
            </Link>

            <Link to = ''>
               <div class = 'RectangleLvl3'>
                  <h3 class = "Level3Text">Level 3 (Coming Soon)</h3>
               </div>
            </Link>

            <Link to = ''>
               <div class = 'RectangleLvl4'>
                  <h3 class = "Level4Text">Level 4 (Coming Soon)</h3>
               </div>
            </Link>

            <Link to = ''>
               <div class = 'RectangleLvl5'>
                  <h3 class = "Level5Text">Level 5 (Coming Soon)</h3>
               </div>
            </Link>

            <Link to = ''>
               <div class = 'RectangleLvlCustom'>
                  <h3 class = "LevelCustomText">Custom Level (Coming Soon)</h3>
               </div>
            </Link>
         </div>
      </div>
    );
}

export default Levels