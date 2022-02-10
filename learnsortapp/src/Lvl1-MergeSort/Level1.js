import React from 'react';
import './Level1.css';
import { Link } from 'react-router-dom';

function Level1() {
    // put dashboard contents under return
    return (
        <div class="contents">
           
            <h1 class = "sort-title">MergeSort</h1>
            <h2 class = "sort-title-background" />

            {/* info about the specific algorithm */}
            <div class = "Outline">
                <div class = "BackgroundRectangle">
                    <h2>What is it?</h2>
                    <p>Merge Sort is a divide-and-conquer algorithm that breaks down a list into several sub-lists (usually half the size of the previous list) until each sublist consists of a single element. These elements are then merged together to form a sorted list.</p>

                    <h2>When to use it?</h2>
                    <p>When dealing with larger data sets, a merge sort is very efficient.</p>

                    <h2>Time and Space Complexity</h2>
                    <p>Space Complexity: O(nlogn)</p>
                    <p>Time Complexity: O(n)</p>
                </div>

               {/* button that will take you to the merge sort animation */}
               <Link to='/MergeSortComponent' class = "continue-link">
                  <div class = "ContinueBox">
                     <h3 class = "ContinueText">Start!</h3>
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

export default Level1
