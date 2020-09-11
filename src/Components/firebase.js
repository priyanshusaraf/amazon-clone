import firebase from "firebase";

const firebaseconfig = {
  apiKey: "AIzaSyC3ToDeWdSG0HaB5Pqd-CQ-op1D6flpzm8",
  authDomain: "clone-79b56.firebaseapp.com",
  databaseURL: "https://clone-79b56.firebaseio.com",
  projectId: "clone-79b56",
  storageBucket: "clone-79b56.appspot.com",
  messagingSenderId: "933831310830",
  appId: "1:933831310830:web:7509df33a7fa29bac662ff",
  measurementId: "G-PHGVKTQG1S",
};
const firebaseApp = firebase.initializeApp(firebaseconfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
