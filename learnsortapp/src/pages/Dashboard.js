import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    // put dashboard contents under return
    return (
        <div>
            <h1>
                <Link to='/Levels'>Go to Merge Sort Levels</Link>  
            </h1>
        </div>
    );
}

export default Dashboard