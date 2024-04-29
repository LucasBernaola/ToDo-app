import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBxps-LO5LSFWegN8eSAQXkx926s8i787A",
    authDomain: "to-do-list-ademass.firebaseapp.com",
    projectId: "to-do-list-ademass",
    storageBucket: "to-do-list-ademass.appspot.com",
    messagingSenderId: "273644273254",
    appId: "1:273644273254:web:23bd74eb2cab3757ae77a7",
};


const appFirebase = initializeApp(firebaseConfig);


const db = getFirestore(appFirebase);
export { db };

export default appFirebase;