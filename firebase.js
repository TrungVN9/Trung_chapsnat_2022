import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvkGs6OcR9-LTm1ck8pDl17LClMLTfGnw",
    authDomain: "chapsnap-c349c.firebaseapp.com",
    projectId: "chapsnap-c349c",
    storageBucket: "chapsnap-c349c.appspot.com",
    messagingSenderId: "282947332868",
    appId: "1:282947332868:web:29ef91f3c5d6206377fe51"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;