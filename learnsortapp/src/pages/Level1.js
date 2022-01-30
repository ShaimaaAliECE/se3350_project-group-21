import React from 'react';

function Level1() {
    // put dashboard contents under return
    return (
        <div>
            <h1>
            What is it? 
            Merge Sort is a divide-and-conquer algorithm that breaks down a list into several sub-lists (usually half the size of the previous list) until each sublist consists of a single element. These elements are then merged together to form a sorted list.

            When to use it?
            When dealing with larger data sets, a merge sort is very efficient.

            Time and Space Complexity
            Space Complexity: O(nlogn)
            Time Complexity: O(n)  
            </h1>
            <button type="button">Click Me!</button>
        </div>
    );
}

export default Level1