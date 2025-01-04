// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCixcf9fEXxQ-SvibBUrSZLY-arR1ASjk0",
    authDomain: "fundsphere-website.firebaseapp.com",
    projectId: "fundsphere-website",
    storageBucket: "fundsphere-website.firebasestorage.app",
    messagingSenderId: "281992057697",
    appId: "1:281992057697:web:f7b0facea87bd585df6b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth