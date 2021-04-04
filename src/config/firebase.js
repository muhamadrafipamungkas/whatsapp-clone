import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/installations';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: window.env.FIREBASE_apiKey,
    authDomain: window.env.FIREBASE_authDomain,
    projectId: window.env.FIREBASE_projectId,
    storageBucket: window.env.FIREBASE_storageBucket,
    messagingSenderId: window.env.FIREBASE_messagingSenderId,
    appId: window.env.FIREBASE_appId,
    measurementId: window.env.FIREBASE_measurementId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
