import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoYsN36BTnGCOi-1CzS3T_7JYFBWdLQJY",
  authDomain: "netflix-clone-ankit.firebaseapp.com",
  projectId: "netflix-clone-ankit",
  storageBucket: "netflix-clone-ankit.appspot.com",
  messagingSenderId: "257618004548",
  appId: "1:257618004548:web:8b7eddf4960bfdec390a11"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore;

const auth = firebase.auth();

export { auth }

export default db;
