import React from 'react';
import ReactDOM from 'react-dom';
import MergeSortComponent from './MergeSortComponent';
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

                    <h2>What are the detailed steps involved? </h2>
                    <div> The merge sort algorithm is an implementation of the divide and conquer technique. It consists of mainly 3 steps:
                    <ol><li>Divide: In this step, the array/list keeps dividing itself recursively into sub-arrays until it reaches the base case.</li>
                    <ul><li>Find the middle index of the array and divide it from the middle.</li></ul>
                    <li>Recursively solve: In this step, the sub-arrays are sorted using recursion</li>
                    <ul><li>Call merge sort for the first half of the array.</li>
	                <li>Call merge sort for the second half of the array</li></ul>
                    <li>Combine: Lastly, this step merges the sub-arrays into the final sorted array using the merge() function.</li></div>

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
            </div>
    </div>
    );
}

export default Level1
