import React from 'react';
import './Custom.css';
import { Link } from 'react-router-dom';

function Custom() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
           <h1 class = "sort-title1">MergeSort</h1>
            <h2 class = "sort-title-background1" />
            
            {/* info about the specific algorithm */}
            <div class = "Outline5">
                <div class = "BackgroundRectangle5">
                    <h1>Custom Level</h1>
                    <h2>Coming Soon!</h2>
                </div>

               <Link to='/Levels' class = "continue-link1">
                  <div class = "BackBox5">
                     <h3 class = "BackText5">Back to levels page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Custom