import firebase from "firebase/app";
import 'firebase/database'; 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBixrXH9oSsCEbU9o4JKUtEefemYQbDocU",
    authDomain: "project3-3db29.firebaseapp.com",
    projectId: "project3-3db29",
    storageBucket: "project3-3db29.appspot.com",
    messagingSenderId: "1007225749970",
    appId: "1:1007225749970:web:923a133d2ccb2f0309480b"
    };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 