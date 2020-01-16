import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANbU9GH4hAN_c4T0vL-t5OVtRNtubkR8s",
  authDomain: "apparel-store-db.firebaseapp.com",
  databaseURL: "https://apparel-store-db.firebaseio.com",
  projectId: "apparel-store-db",
  storageBucket: "apparel-store-db.appspot.com",
  messagingSenderId: "665996155415",
  appId: "1:665996155415:web:21fd037bf0a5eea6b55a52",
  measurementId: "G-3H1FD4YHGJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
