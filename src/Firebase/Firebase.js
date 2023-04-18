// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC0Lt9hfiJP9LSi34eSclIEaLw5X3CTYOM",

  authDomain: "eshop-7242c.firebaseapp.com",

  projectId: "eshop-7242c",

  storageBucket: "eshop-7242c.appspot.com",

  messagingSenderId: "880268974912",

  appId: "1:880268974912:web:fc4474a1d665c53e2478a5"

};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db=firebase.firestore();

const auth=firebase.auth();

export {db,auth};   