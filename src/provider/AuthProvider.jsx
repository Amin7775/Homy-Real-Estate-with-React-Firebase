import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";





export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (name,photoURL,email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // User State
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
