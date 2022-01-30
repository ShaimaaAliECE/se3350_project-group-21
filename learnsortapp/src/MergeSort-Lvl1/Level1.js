import React from 'react';
import ReactDOM from 'react-dom';
import MergeSortComponent from './MergeSortComponent';

function Level1() {
    // put dashboard contents under return
    return (
        <><div>

            <h2>What is it?</h2>
            <p>Merge Sort is a divide-and-conquer algorithm that breaks down a list into several sub-lists (usually half the size of the previous list) until each sublist consists of a single element. These elements are then merged together to form a sorted list.</p>

            <h2>When to use it?</h2>
            <p>When dealing with larger data sets, a merge sort is very efficient.</p>

            <h2>Time and Space Complexity</h2>
            <p>Space Complexity: O(nlogn)</p>
            <p>Time Complexity: O(n)</p>
            </div>
        
        <button onClick={DisplayMergeSort}>
                Continue
            </button></>
    );
}

function DisplayMergeSort(){
    ReactDOM.render(
        <React.StrictMode>
          <MergeSortComponent />
        </React.StrictMode>,
        document.getElementById('root')
      );
}

export default Level1