import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileIcon from './profileIcon.png';
import firebase from 'firebase/compat/app';

function Navbar() {

   const [showLogOut, setShowLogOut] = useState(firebase.auth().currentUser ? true : false);
   const [showProfileIcon, setShowProfileIcon] = useState(firebase.auth().currentUser ? true : false);  


   // register to receive notification when the current user changes
   firebase.auth().onAuthStateChanged(user => {
      if(firebase.auth().currentUser){
         setShowLogOut(true);
         setShowProfileIcon(true);
      }else{
         setShowLogOut(false);
         setShowProfileIcon(false);
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
                    {showLogOut && (
                       <li>
                        <Link to ={"/LogOut"} className={"nav-links"}>
                           Log Out
                        </Link>
                    </li>
                    )}
                    {showProfileIcon && (
                    <li>
                        <Link to ={"/profile"}>
                           <img src={profileIcon} className={"navbar-profile"}/>
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;