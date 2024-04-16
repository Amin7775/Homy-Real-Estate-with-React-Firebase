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

// main
const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update current user after register
  const updateUserAfterRegister = (name, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // update current user from profile page
  const updateUserFromProfile = (name, photoURL, phoneNumber) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
      // phoneNumber: phoneNumber,
    });
  };
  // update email
  const updateEmailAddress = (email) => {
    setLoading(true)
    return updateEmail(auth.currentUser, email);
  };
  // update password
  const updateToNewPassword = (password) => {
    setLoading(true)
    return updatePassword(auth.currentUser, password);
  };

  // sign in with email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //twitter login
  const twitterLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, twitterProvider);
  };

  // User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
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
    updateUserFromProfile,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
