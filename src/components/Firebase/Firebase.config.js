import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUTCA7K11thvUZw2KV2zA-AkQ3UzF_wy4",
    authDomain: "login-register-authentic-d65cd.firebaseapp.com",
    projectId: "login-register-authentic-d65cd",
    storageBucket: "login-register-authentic-d65cd.appspot.com",
    messagingSenderId: "867292093095",
    appId: "1:867292093095:web:78fb3cfa709ac9cabe1982"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 