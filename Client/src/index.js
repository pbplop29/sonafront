import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCHIxmewMGBd-NrG8dwWIuaZ6dRlcw24TQ",
  authDomain: "testing-react-1f8a8.firebaseapp.com",
  projectId: "testing-react-1f8a8",
  storageBucket: "testing-react-1f8a8.appspot.com",
  messagingSenderId: "780206517908",
  appId: "1:780206517908:web:c802dad2566030f7624e81",
  measurementId: "G-QNYZ3Z5K9H"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
