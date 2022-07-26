import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyCEY-XjfGbl37q9l6Xngsz0ECT3AD5hhVQ",
  authDomain: "auth-development-b301b.firebaseapp.com",
  projectId: "auth-development-b301b",
  storageBucket: "auth-development-b301b.appspot.com",
  messagingSenderId: "1089040293922",
  appId: "1:1089040293922:web:15bc056d078cd0c388ea7b",
  measurementId: "G-4VNMR40N2V",
});

export const auth = getAuth(app);
export const createUser =  createUserWithEmailAndPassword()
export default app