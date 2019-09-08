import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// My app's Firebase configuration
const config = {
    apiKey: "AIzaSyClPwh2ERccocYw-zundyAUwJk2f3Aso64",
    authDomain: "ridbay-shop-db.firebaseapp.com",
    databaseURL: "https://ridbay-shop-db.firebaseio.com",
    projectId: "ridbay-shop-db",
    storageBucket: "",
    messagingSenderId: "750310140637",
    appId: "1:750310140637:web:da3e1984d683dba0b20934"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;