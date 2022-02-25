import firebase from "firebase";
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-sjEWr6jgal8ehrfVVtmC5IjC4GI-cA",
  authDomain: "daily-habits-ae91e.firebaseapp.com",
  projectId: "daily-habits-ae91e",
  storageBucket: "daily-habits-ae91e.appspot.com",
  messagingSenderId: "783458997610",
  appId: "1:783458997610:web:db3e4f6c72087e0d2c4113"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database