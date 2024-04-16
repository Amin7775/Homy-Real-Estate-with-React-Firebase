import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update current user after register
  const updateUserAfterRegister = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // update current user from profile page
  const updateUserFromProfile = (name, photoURL,phoneNumber) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
      phoneNumber : phoneNumber
    });
  };
  // update email
  const updateEmailAddress = (email) =>{
    return updateEmail(auth.currentUser,email)
  }
  // update password
  const updateToNewPassword = (password) => {
    return updatePassword(auth.currentUser,password)
  }

  // sign in with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //twitter login
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  // User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    updateUserAfterRegister,
    logOut,
    loginUser,
    googleLogin,
    twitterLogin,
    auth,
    updateEmailAddress,
    updateToNewPassword,
    updateUserFromProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
