import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD7JoRi7LcJHQHXHpEcTLgQt-bgyXUOYUI",
    authDomain: "wily-8635d.firebaseapp.com",
    databaseURL: "https://wily-8635d.firebaseio.com",
    projectId: "wily-8635d",
    storageBucket: "wily-8635d.appspot.com",
    messagingSenderId: "1068875411049",
    appId: "1:1068875411049:web:a20d5b2f6a7f54ff417cf8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
