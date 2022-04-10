// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSAmfgjUM4yWdqx7Wke-re4aTNGP8qhEs",
    authDomain: "ema-jhon-simple-da8ff.firebaseapp.com",
    projectId: "ema-jhon-simple-da8ff",
    storageBucket: "ema-jhon-simple-da8ff.appspot.com",
    messagingSenderId: "381710927435",
    appId: "1:381710927435:web:1c798cb6e4c864d4ca6fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;