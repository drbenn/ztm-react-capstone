// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAj00AFS-zdC1OEltZNaSzqeaRpJFERC1U",

  authDomain: "benn-clothing-db.firebaseapp.com",

  projectId: "benn-clothing-db",

  storageBucket: "benn-clothing-db.appspot.com",

  messagingSenderId: "1001696302598",

  appId: "1:1001696302598:web:104892aa82e9f3bc791587"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);