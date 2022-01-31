import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className="dashboardcontents">
                <h1 className="dashboardheader">What would you like to learn?</h1>
                <div className="square-container">
                    {/* copy this div to make another algorithm box */}
                    <div className="square">
                        <p className="algorithm-name">Merge Sort</p>
                        <div className="bottom-square">
                            <p className="levelnumbers">6 Levels</p>
                        </div>
                        <div className="circle"></div>
                        
                        <Link to='/Levels' className="levelslink">
                            <div className="circle2">
                                <p className="go">GO!</p>
                            </div>
                        </Link>  
                    </div>
                    {/* end of one algorithm box */}
                    
                    <div className="square">
                        <p className="algorithm-name">Coming Soon!</p>
                        <div className="bottom-square">
                            <p className="levelnumbers">6 Levels</p>
                        </div>
                        <div className="circle"></div>
                        
                        <Link to='' className="levelslink">
                            <div className="circle2">
                                <p className="go">GO!</p>
                            </div>
                        </Link>  
                    </div>

                    <div className="square">
                        <p className="algorithm-name">Coming Soon!</p>
                        <div className="bottom-square">
                            <p className="levelnumbers">6 Levels</p>
                        </div>
                        <div className="circle"></div>
                        
                        <Link to='' className="levelslink">
                            <div className="circle2">
                                <p className="go">GO!</p>
                            </div>
                        </Link>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
