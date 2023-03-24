"use client";

import { createContext, useContext } from "react";
import { auth } from "@/config/firebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const register = async (name, email, password) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredentials;

    return await updateProfile(user, { displayName: name });
  };

  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};