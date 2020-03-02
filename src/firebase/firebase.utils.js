import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAELsH6phfAo9422HNkqp4MaqexuBFJLME",
  authDomain: "crwn-db-66df9.firebaseapp.com",
  databaseURL: "https://crwn-db-66df9.firebaseio.com",
  projectId: "crwn-db-66df9",
  storageBucket: "crwn-db-66df9.appspot.com",
  messagingSenderId: "434814997759",
  appId: "1:434814997759:web:e9e7728bca8a5a340ca8ca",
  measurementId: "G-GQHMC1531R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
