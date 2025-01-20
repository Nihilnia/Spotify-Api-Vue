import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8FUCvSE1Z744eI2iZz8h4qCukG9-IKTY",
  authDomain: "fir-exercise-one-ae7c6.firebaseapp.com",
  projectId: "fir-exercise-one-ae7c6",
  storageBucket: "fir-exercise-one-ae7c6.firebasestorage.app",
  messagingSenderId: "264567778464",
  appId: "1:264567778464:web:4ec34afc2d42557d25adc5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
