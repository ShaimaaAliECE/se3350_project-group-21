import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
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

import {useAuth} from "./authentication/authProvider"
import FirebaseAuth from "./authentication/firebaseAuth"
export default function Login() {
    const { user, loading, logout } = {
        user: null,
        loading: false,
        logout: () => {},
      };
  
    if (loading) return null;
    if (!user) return <FirebaseAuth />;
  
    return (
      <main>
        <button type="button" onClick={logout} className="link">
          Logout
        </button>
      </main>
    );
  }




