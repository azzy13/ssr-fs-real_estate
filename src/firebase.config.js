// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDe29GmB9As29r2dVfBelWc8Ryyq5dO0Wk',
  authDomain: 'real-estate-4fa5e.firebaseapp.com',
  projectId: 'real-estate-4fa5e',
  storageBucket: 'real-estate-4fa5e.appspot.com',
  messagingSenderId: '66778768873',
  appId: '1:66778768873:web:d7bce36663ff9824df5778',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
