// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKwpLaT4tQq2CfUMGGxnvvgvH5G56_19c",
    authDomain: "dentist-web-997b3.firebaseapp.com",
    projectId: "dentist-web-997b3",
    storageBucket: "dentist-web-997b3.appspot.com",
    messagingSenderId: "788776472634",
    appId: "1:788776472634:web:33ca697a53a37333d62503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth