import React from 'react';
import './Level2.css';
import { Link } from 'react-router-dom';

function Level2() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
           <h1 class = "sort-title">MergeSort</h1>
            <h2 class = "sort-title-background" />
            
            

            {/* info about the specific algorithm */}
            <div class = "Outline1">
                <div class = "BackgroundRectangle1">
                    <h2>Level 2</h2>
                    <p>Now that you are familiar with merge sort, you can try an example on your own!</p>
                    <p>You'll be given an unsorted list and a description of each step in the merge sort algorithm.</p>
                    <p>For each step, you'll be asked to input the correct numbers, which you can check with the "check my answer" button.</p>
                    <p>If you are correct, you will move on to the next step, if you are incorrect, you can try again.</p>
                    <p>Once you are ready to begin, you can press the Start button!</p>
                </div>

               {/* button that will take you to the merge sort animation */}
               <Link to='/MergeSortComponent1' class = "continue-link1">
                  <div class = "ContinueBox1">
                     <h3 class = "ContinueText1">Start!</h3>
                  </div>
               </Link>
               <Link to='/Levels' class = "continue-link">
                  <div class = "BackBox">
                     <h3 class = "BackText">Levels Page</h3>
                  </div>
               </Link>
            </div>
    </div>
    );
}

export default Level2
