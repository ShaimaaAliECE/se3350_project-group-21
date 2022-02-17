import React from 'react';
import './Level5.css';
import { Link } from 'react-router-dom';

function Level5() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
           <h1 class = "sort-title1">MergeSort</h1>
            <h2 class = "sort-title-background1" />
            
            {/* info about the specific algorithm */}
            <div class = "Outline4">
                <div class = "BackgroundRectangle4">
                    <h1>Level 5</h1>
                    <h2>Coming Soon!</h2>
                </div>

               <Link to='/Levels' class = "continue-link1">
                  <div class = "BackBox4">
                     <h3 class = "BackText4">Back to levels page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Level5