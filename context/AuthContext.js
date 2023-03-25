"use client";

import { createContext, useContext, useState, useEffect } from "react";

import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged, // checks if user is logged in
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const register = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return await updateProfile(user, { displayName: name });
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInSession) => {
      setUser(userInSession);
      console.log(userInSession);
    });

    // Returns a function that calls the unsubscribe function when the component unmounts.
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
