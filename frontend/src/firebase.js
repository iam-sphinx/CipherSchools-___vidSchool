// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3OkChTrVJ01v_221nvkmKv1YQ_SBCng",
  authDomain: "video-a297c.firebaseapp.com",
  projectId: "video-a297c",
  storageBucket: "video-a297c.appspot.com",
  messagingSenderId: "236809426828",
  appId: "1:236809426828:web:93362cd826c4c4ee3d28a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app; 