import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../Config/firebase-setup';

const AuthContext = React.createContext();
//create Authentication Context

export const useAuth = () => {
  return useContext(AuthContext);
};
//allows access to AuthContext

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  //create user state
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  // signup function, creates user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe; // <--- auth.onAuthStateChange returns a method which will unsubscribe this Auth State Change event when we are done.
    //only to be run when we mount component hence useEffect
  }, []);

  const value = { currentUser, signup }; //currentUser is what we need for our AuthContext.Provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; //value is the infomation that we want to privide
};
