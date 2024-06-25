import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE9GWWMBG1rLO0Cpa-pHyijxHv5-dFtCs",
    authDomain: "alluwannado.firebaseapp.com",
    databaseURL: "https://alluwannado-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alluwannado",
    storageBucket: "alluwannado.appspot.com",
    messagingSenderId: "290067914768",
    appId: "1:290067914768:web:d91ce2168ec66539f82a95",
    measurementId: "G-WC4YXZHTRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export { app, analytics, database };
