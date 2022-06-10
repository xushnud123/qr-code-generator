import React, { useCallback, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [load,setLoad] = useState(false)


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // console.log(errorCode + errorMessage);
      // });
  }

  function login(email, password) {
    setLoad(!load)
    return signInWithEmailAndPassword(auth, email, password)
    // .then((user) => {
    //   const uid = user.uid;

    //   setCurrentUser(uid);
    //   // return uid;
    // });
  }


  function logout(){
    setCurrentUser('')
    setLoad(!load);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
      }
    });
    return unsubscribe;
  }, []);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         setCurrentUser(user);
         setLoading(false);
       } else {
       }
     });
     return unsubscribe;
   }, [load]);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    load
  };
  return (
    <AuthContext.Provider value={value}>
      {
      // !loading &&
       children}
    </AuthContext.Provider>
  );
}
