import { FunctionComponent, useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },

  ],
  signInSuccessUrl: "/",
};

const FirebaseAuth = () => {
  return (
  <div>
    <StyledFirebaseAuth uiConfig = {firebaseAuthConfig}
    firebaseAuth = {firebase.auth()}
    />
  </div>
  );
};
export default FirebaseAuth;