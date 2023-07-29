import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBck1Uy2hKbIOWddF4ZiHXmOF5E3S8iD1o",
    authDomain: "mobile-project-react-native.firebaseapp.com",
    databaseURL: "https://mobile-project-react-native-default-rtdb.firebaseio.com",
    projectId: "mobile-project-react-native",
    storageBucket: "mobile-project-react-native.appspot.com",
    messagingSenderId: "826779843927",
    appId: "1:826779843927:web:a3261ceea0eb1e053a9212",
    measurementId: "G-GCEHVXW9PB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);