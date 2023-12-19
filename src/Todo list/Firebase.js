
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN4AB1NssZJI2dsDtqn-lFOlFbUBv85A8",
    authDomain: "todo-list-7acd4.firebaseapp.com",
    projectId: "todo-list-7acd4",
    storageBucket: "todo-list-7acd4.appspot.com",
    messagingSenderId: "883888317075",
    appId: "1:883888317075:web:98d0387127aa801d32a366"
};

const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
