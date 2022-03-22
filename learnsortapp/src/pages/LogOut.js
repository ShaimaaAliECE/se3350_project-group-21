import React from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { useAuth } from "./authentication/authProvider"
import signOut from "./authentication/firebaseAuth"
import UserProfile from '../Profile/UserProfile';
import firebase from 'firebase/compat/app';

const onClickLogout = () => {
   console.log('Logoff clicked' );
   UserProfile.userLoggedOut(); 
   firebase.auth().signOut();
};

function LogOut() {
    return (
        <>
            <div class="LogOut-contents">
               <h2 class = "LogOut-title-background"></h2>
               <div class = "LogOut-title">Log Out</div>

               <div class = "LogOut-Outline">
                  <div class = "LogOut-BackgroundRectangle">
                     <h2>Thanks for learning with LearnSort!</h2>
                     <Link to='/' onClick={onClickLogout} class="Logout-button">
                        <div class = "Logout-Box">
                           <h3 class= "Logout-text">Log Out</h3>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
        </>
        
    );
}

export default LogOut