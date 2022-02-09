import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
         <div className="contents">
            <div class="Rectangle17"></div>
            <div class="Rectangle18">
               <h3 class="WelcomeText">Welcome to LearnSort!</h3>
            </div>
            {/* <Link to='/dashboard'> */}
            <Link to='/login'>
            <div class="Rectangle162">
               <h3 class = "StartText">Start Now</h3>
            </div>
            </Link>
         </div>
    );
}


export default Home
