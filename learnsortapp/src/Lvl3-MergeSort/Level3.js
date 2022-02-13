import React from 'react';
import './Level3.css';
import { Link } from 'react-router-dom';

function Level3() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
           <h1 class = "sort-title1">MergeSort</h1>
            <h2 class = "sort-title-background1" />
            
            

            {/* info about the specific algorithm */}
            <div class = "Outline2">
                <div class = "BackgroundRectangle2">
                    <h2>Level 3</h2>
                    <p>Now that you have completed Level 2 of merge sort, you can try proceed to Level 3!</p>
                    <p>As done in Level 2, you'll be given an unsorted list but no description of the steps in the merge sort algorithm.</p>
                    <p>You'll be asked to input the correct numbers, which you can check with the "check my answer" button.</p>
                    <p>If you are correct, you will move on to the next step, if you are incorrect, you can try again.</p>
                    <p>Once you are ready to begin, you can press the Start button!</p>
                </div>

               {/* button that will take you to the merge sort animation */}
               <Link to='/MergeSortComponent2' class = "continue-link1">
                  <div class = "ContinueBox2">
                     <h3 class = "ContinueText2">Start!</h3>
                  </div>
               </Link>
               <Link to='/Levels' class = "continue-link1">
                  <div class = "BackBox2">
                     <h3 class = "BackText2">Levels Page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Level3