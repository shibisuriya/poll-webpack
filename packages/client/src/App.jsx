import React, { Fragment, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDjD6nmkmiEMEsJEMaRzUgHP0d8xoLiMeg",
//   authDomain: "pollapp-58e2d.firebaseapp.com",
//   projectId: "pollapp-58e2d",
//   storageBucket: "pollapp-58e2d.appspot.com",
//   messagingSenderId: "991709950291",
//   appId: "1:991709950291:web:a8f38245a3f2d09769f1a6",
// };

// Initialize Firebase

export default function App() {
  let name = "مرحبا بك";
  // useEffect(() => {
  //   initializeApp(firebaseConfig);
  //   console.info("getApp", getApp());
  //   const provider = new GoogleAuthProvider();

  //   const auth = getAuth();
  //   auth.onAuthStateChanged((user) => {
  //     console.info("asdas", user);
  //   });
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.info("HELLO", user);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }, []);

  return (
    <Fragment>
      <div>{name} 1. This is my name</div>
      <div>
        <bdi>{name}</bdi> 1. This is my name
      </div>
      <div>
        <span style={{ unicodeBidi: "isolate" }}>{name}</span> 4
      </div>
    </Fragment>
  );
}
