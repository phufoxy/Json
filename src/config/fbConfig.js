import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBFWmEi2raK-sJ3v9ZCQOpBDB1smOgDW98",
  authDomain: "gshtdt-5114e.firebaseapp.com",
  databaseURL: "https://gshtdt-5114e.firebaseio.com",
  projectId: "gshtdt-5114e",
  storageBucket: "gshtdt-5114e.appspot.com",
  messagingSenderId: "429364986528",
  appId: "1:429364986528:web:44f8155dab2ae99c153fc5",
  measurementId: "G-7L360QNSGW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
