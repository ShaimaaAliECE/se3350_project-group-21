import React from 'react';
import { Link } from 'react-router-dom';
import './Levels.css'

function Levels() {
    // put dashboard contents under return
    return (
        <>
        <div class = "Rectangle15">
            <h3 class = "MergeSortText">Merge Sort</h3>
        </div>

        <div class = "Rectangle1">
            <Link to='/Level1'>
                <div class = "Rectangle2">
                    <h3 class= "Level1Text">Level 1</h3>
                </div>
            </Link>
            
        </div>
    </>
    );
}

export default Levels