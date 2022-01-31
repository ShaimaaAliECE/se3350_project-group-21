import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
        <div class="Rectangle17"></div>
        <div class="Rectangle18">
          <h3 class="WelcomeText">Welcome to LearnSort!</h3>
        </div>
        <Link to='/dashboard'>
        <div class="Rectangle162">
          <h3 class = "StartText">Start</h3>
        </div>
        </Link>
        </>
    );
}


export default Home