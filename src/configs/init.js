import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDTkib5qDGNodfBA6sM0UCLhDT2tWoE35U",
  authDomain: "bai-demo-1987e.firebaseapp.com",
  databaseURL: "https://bai-demo-1987e-default-rtdb.firebaseio.com",
  projectId: "bai-demo-1987e",
  storageBucket: "bai-demo-1987e.appspot.com",
  messagingSenderId: "176004299078",
  appId: "1:176004299078:web:942e31d6ab3bfc9198cd47",
  measurementId: "G-L2JY64D9FL",
};

// init firebase
const app = firebase.initializeApp(firebaseConfig);

// init firestore service
const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, firebase };
