import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import UserProfile from '../Profile/UserProfile';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { useState, useEffect, FormEvent } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDark as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { useAuth } from "./authentication/authProvider"
import FirebaseAuth from "./authentication/firebaseAuth"


export default function Login() {

   const { user, loading, logout } = useAuth();
   console.log(user + "0");
   console.log(user + "1");
   if (!user) return <FirebaseAuth />;
   console.log(user + "2");

   return (
      <main>
         <button type="button" onClick={logout} className="link">
            Logout
         </button>
      </main>
   );
}

// register to receive notification when the current user changes
firebase.auth().onAuthStateChanged(user => {
   if (user) {
      UserProfile.userLoggedIn( user.email );
   }
   else {
      UserProfile.userLoggedOut( user.email );
   }
})
