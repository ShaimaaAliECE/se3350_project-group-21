import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyB8QgRX-lR_dcLWKNYjdYQTPKGtm6Ahu4M",
  authDomain: "se-3350.firebaseapp.com",
  projectId: "se-3350",
  storageBucket: "se-3350.appspot.com",
  messagingSenderId: "991876851217",
  appId: "1:991876851217:web:8b599f9247897bffb2f3b0",
  measurementId: "G-PS2BVX4JKF"
};

function initFirebase(){
    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }
}

initFirebase();

export {firebase};