
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYIMW9MWDVpyP2VCB4j_DH7aRoUszp00A",
  authDomain: "reactjs-gastonolmedo.firebaseapp.com",
  projectId: "reactjs-gastonolmedo",
  storageBucket: "reactjs-gastonolmedo.appspot.com",
  messagingSenderId: "699455551876",
  appId: "1:699455551876:web:729a5109f0858b5c3005d1"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
