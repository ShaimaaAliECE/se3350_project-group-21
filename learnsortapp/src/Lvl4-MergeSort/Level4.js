import React from 'react';
import './Level4.css';
import { Link } from 'react-router-dom';

function Level4() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
           <h1 class = "sort-title1">MergeSort</h1>
            <h2 class = "sort-title-background1" />
            
            {/* info about the specific algorithm */}
            <div class = "Outline3">
                <div class = "BackgroundRectangle3">
                <h2>Level 4</h2>
                <p>Now that you have completed Level 3 of merge sort, you can proceed to Level 4!</p>
                <p>As done in previous levels , you'll be given an unsorted list but no description of the steps in the merge sort algorithm.</p>
                <p>You'll be asked to input the correct numbers, which you can check with the "check my answer" button.</p>
                <p>If you are correct, you will move on to the next step, if you are incorrect, you can try again.</p>
                <p>Once you are ready to begin, you can press the Start button!</p>
                </div>

                <Link to='/MergeSortComponent3' class = "continue-link1">
                  <div class = "ContinueBox2">
                     <h3 class = "ContinueText2">Start!</h3>
                  </div>
               </Link>

               <Link to='/Levels' class = "continue-link1">
                  <div class = "BackBox2">
                     <h3 class = "BackText2">Levels page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Level4