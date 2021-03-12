import firebase from "firebase/app";
import "firebase/functions";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "./assets/chat.css";
import "./assets/bootstrap.css";
var firebaseConfig = {
  apiKey: "AIzaSyADqdrcKC55ZtnNwTGzQ3aQYgRb10xsSEA",
  authDomain: "expo-tecnologica.firebaseapp.com",
  databaseURL: "https://expo-tecnologica.firebaseio.com",
  projectId: "expo-tecnologica",
  storageBucket: "expo-tecnologica.appspot.com",
  messagingSenderId: "435210095106",
  appId: "1:435210095106:web:6abb012b18ef211f0cb51b",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
const functions = app.functions();

export { auth, db, storage, functions };
