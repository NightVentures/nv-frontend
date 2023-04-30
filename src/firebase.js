import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcr_fFFhsucJPN8EJGP0c4MhmAJKPomCQ",
    authDomain: "nightventures-cec2a.firebaseapp.com",
    projectId: "nightventures-cec2a",
    storageBucket: "nightventures-cec2a.appspot.com",
    messagingSenderId: "302326985131",
    appId: "1:302326985131:web:95aeb8d9df81f17b7da2ee",
    measurementId: "G-3FYYRGHRBM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default { app, auth }