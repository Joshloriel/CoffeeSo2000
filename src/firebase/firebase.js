// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD72SFmfuT7FAqmtk3wTE57rqScTkKEBoc",
    authDomain: "logincoffeeso.firebaseapp.com",
    projectId: "logincoffeeso",
    storageBucket: "logincoffeeso.appspot.com",
    messagingSenderId: "707262698904",
    appId: "1:707262698904:web:0851b8da9d2d4b76ee87ed",
    measurementId: "G-G27CC5TVTX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};

const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
};

export { auth, signInWithGoogle, signInWithFacebook };
