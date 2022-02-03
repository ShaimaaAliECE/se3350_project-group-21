import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import JSONDATA from "./AlgorithmSelect.json"
import {useState} from 'react'

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <div className="dashboardcontents">
                <h1 className="dashboardheader">What would you like to learn?</h1>

                <div >
                    <input type="text" className = "searchBar" placeholder="Search Algorithm" onChange={event => {setSearchTerm(event.target.value)}}/>
                    <div className="searchContent">
                    {JSONDATA.filter((val)=>{
                        if (searchTerm == "") {
                            return val
                        } else if (val.algorithm.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key)=> {
                        return <div className="algorithmFormat" key={key}>
                                    <div className="square">
                                        <p className="algorithm-name">{val.algorithm}</p>
                                        <div className="bottom-square">
                                        <p className="levelnumbers">{val.levels}</p>
                                        </div>
                                        <div className="circle"></div>
                                        
                                        <Link to={val.link} className="levelslink">
                                            <div className="circle2">
                                                <p className="go">GO!</p>
                                            </div>
                                        </Link>  
                                    </div>
                                </div>
                    })}
                </div>

                
                </div>
            </div>
        </>
    )
}

export default Dashboard
