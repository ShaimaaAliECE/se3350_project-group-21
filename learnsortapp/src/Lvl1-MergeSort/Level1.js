import React from 'react';
import ReactDOM from 'react-dom';
import MergeSortComponent from './MergeSortComponent';
import './Level1.css';
import { Link } from 'react-router-dom';

function Level1() {
    // put dashboard contents under return
    return (
        <>
            <div class = "Rectangle15">
                <h3 class = "MergeSortText">Merge Sort</h3>
            </div>
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
            </div>

            {/* button that will take you to the merge sort animation */}
            <Link to='/MergeSortComponent'>
                <div class = "ContinueBox">
                    <h3 class = "ContinueText">Continue</h3>
                </div>
            </Link>
    </>
    );
}

export default Level1