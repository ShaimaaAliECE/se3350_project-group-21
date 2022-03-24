import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileIcon from './profileIcon.png';
import firebase from 'firebase/compat/app';

function Navbar() {

   const [showLogOut, setShowLogOut] = useState(firebase.auth().currentUser ? true : false);
   const [showProfileIcon, setShowProfileIcon] = useState(firebase.auth().currentUser ? true : false);
   const [showLogIn, setShowLogIn] = useState(!firebase.auth().currentUser ? true : false);    


   // register to receive notification when the current user changes
   firebase.auth().onAuthStateChanged(user => {
      if(firebase.auth().currentUser){
         setShowLogOut(true);
         setShowProfileIcon(true);
         setShowLogIn(false);
      }else{
         setShowLogOut(false);
         setShowProfileIcon(false);
         setShowLogIn(true);
      }
   })

      return (
        <>
        
            <nav className="NavbarItems">
                <Link to='/' className="navbar-logo">LearnSort</Link>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to = {item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <div class="dropdown">
                        {showProfileIcon && (
                        <li>
                            <img src={profileIcon} className={"navbar-profile"}/>
                            <div class="dropdown-content">
                                <Link to ={"/profile"} className={"nav-links"}>View Profile</Link>
                                <Link to ={"/Logout"} className={"nav-links"}>Logout</Link>
                            </div>
                            
                        </li>
                        )}
                    </div>
                    {showLogIn && (
                    <li>
                        <Link to ={"/LogIn"} className={"nav-links"}>
                           Log In
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;