import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPD8HDhnDerROxscLyEFbdPvifKCDBNwA",
    authDomain: "todo-app-2ddb9.firebaseapp.com",
    projectId: "todo-app-2ddb9",
    storageBucket: "todo-app-2ddb9.appspot.com",
    messagingSenderId: "902149855555",
    appId: "1:902149855555:web:a11d577accc1fed3a177f6",
    measurementId: "G-C3JDLTHJL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);