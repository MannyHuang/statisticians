import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAXQwGziqAOPwQ-9BSQ7ZzIYWCFapK5PnQ",
  authDomain: "zsale-5ea1c.firebaseapp.com",
  databaseURL: "https://zsale-5ea1c.firebaseio.com",
  projectId: "zsale-5ea1c",
  storageBucket: "zsale-5ea1c.appspot.com",
  messagingSenderId: "885724257942",
  appId: "1:885724257942:web:e7007d354511bf5c8cecb7",
  measurementId: "G-VT0RE5GTGM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;