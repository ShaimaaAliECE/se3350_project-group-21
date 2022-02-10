import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileIcon from './profileIcon.png';

function Navbar() {
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
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link to ={"/profile"}>
                           <img src={profileIcon} className={"navbar-profile"}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;