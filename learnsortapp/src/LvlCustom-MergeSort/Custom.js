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
                    <p>Choose the length of array to implement the merge sort algorithm.</p>
                </div>

               <Link to='/Component3' class = "link1">
                  <div class = "backBox51">
                     <h3 class = "backText51">10</h3>
                  </div>
               </Link>
               <Link to='/Component4' class = "link1">
                  <div class = "backBox52">
                     <h3 class = "backText52">20</h3>
                  </div>
               </Link>
               <Link to='/Component5' class = "link1">
                  <div class = "backBox53">
                     <h3 class = "backText53">50</h3>
                  </div>
               </Link>
               <Link to='/Levels' class = "continue-link">
                  <div class = "backBox5">
                     <h3 class = "backText5">Levels Page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Custom