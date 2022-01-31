import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {
    return (
        <>
        <div>
            <h1 class = "Title">What would you like to learn?</h1>
        </div>

        <div class = "Rectangle12">
            <h3 class = "Search">Search</h3>
        </div>

        <div class = "Rectangle8">
            <h3 class = "MergeSortText1">Merge Sort</h3>
            <div class = "Rectangle11">
                <h5 class = "SixLevelsText"> 6 Levels</h5>
                <Link to='/Levels'>
                    <div class="arrow-right"></div>
                </Link>
            </div>
        </div>
        </>
    );
}


export default Dashboard
