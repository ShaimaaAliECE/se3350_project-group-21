import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function Login() {
    return (
         <div className="contents">
            
        
    <div id="modal-signup" class="modal">
        <div class="modal-content">
            <h4 id="signup-text">Sign up</h4>
            <br />
            <form id="signup-form">
                <div class="input-field">
                    <label for="signup-email">Email address</label>
                    <input type="email" id="signup-email" required />
                </div>
                <div class="input-field">
                    <label for="signup-password">Choose password</label>
                    <input type="password" id="signup-password" required />
                </div>
                <button class="submit">Submit</button>
            </form>
        </div>
    </div>

 
    <div id="modal-login" class="modal">
        <div class="modal-content">
            <h4 id="login-text">Login</h4>
            <br />
            <form id="login-form">
                <div class="input-field">
                    <label for="login-email">Email address</label>
                    <input type="email" id="login-email" required />
                </div>
                <div class="input-field">
                    <label for="login-password">Your password</label>
                    <input type="password" id="login-password" required />
                </div>
                <button class="submit">Submit</button>
            </form>
        </div>
    </div>
            <Link to='/dashboard'>
            <div class="Rectangle162">
               <h3 class = "StartText">Login</h3>
            </div>
            </Link>
         </div>
    );
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8QgRX-lR_dcLWKNYjdYQTPKGtm6Ahu4M",
  authDomain: "se-3350.firebaseapp.com",
  projectId: "se-3350",
  storageBucket: "se-3350.appspot.com",
  messagingSenderId: "991876851217",
  appId: "1:991876851217:web:8b599f9247897bffb2f3b0",
  measurementId: "G-PS2BVX4JKF"
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);

/*
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if(user){
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }
    else{
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}
//alisten on auth status changes
auth.onAuthStateChanged(user => {
    if(user){
        console.log('user logged in: ', user)
        setupUI(user);
    }
    else{
        console.log('user logged out');
        setupUI();
    }
})

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email,password);

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        //const modal = document.querySelector('#modal-signup');
        //this.Modal.getInstance(modal).close();
        signupForm.reset();
    })
})


//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        //close the login modal and rest the form
        //const modal = document.querySelector('#modal-login');
        //this.Modal.getInstance(modal).close();
        loginForm.reset();

    })
})
*/



export default Login