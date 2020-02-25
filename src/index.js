import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDgbw2FdY8BMx0UHkiqTeChSJGxeNrsUUA",
    authDomain: "react-firebase-to-do-1.firebaseapp.com",
    databaseURL: "https://react-firebase-to-do-1.firebaseio.com",
    projectId: "react-firebase-to-do-1",
    storageBucket: "react-firebase-to-do-1.appspot.com",
    messagingSenderId: "252610080633",
    appId: "1:252610080633:web:13d1017d05037549a989a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

