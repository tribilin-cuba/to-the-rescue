import firebase from "firebase";
import "firebase/analytics";
import "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyCOl76atKnpcjHsrK6MknUXRBekDK_dJl8",
    authDomain: "to-the-rescue-4c250.firebaseapp.com",
    projectId: "to-the-rescue-4c250",
    storageBucket: "to-the-rescue-4c250.appspot.com",
    messagingSenderId: "88808042476",
    appId: "1:88808042476:web:b3d36e2fff4b43c5c05ac9",
    measurementId: "G-SE04L5SX65"
};

firebase.initializeApp(firebaseConfig);