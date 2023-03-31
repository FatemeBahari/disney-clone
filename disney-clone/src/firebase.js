import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADGcin1a3tTV1V06GKVhw9peYrhWm0Jcc",
  authDomain: "disney-clone-8b1b0.firebaseapp.com",
  projectId: "disney-clone-8b1b0",
  storageBucket: "disney-clone-8b1b0.appspot.com",
  messagingSenderId: "378153732332",
  appId: "1:378153732332:web:5517e6ec3357a6742e3dc9",
  measurementId: "G-Z5ZRV1NR03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
