"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, // checks if user is logged in
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Tracks user
  const [user, setUser] = useState(null);
  const router = useRouter();

  const register = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return await updateProfile(user, { displayName: name });
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      GoogleAuthProvider.credentialFromResult(result);
      // console.log("user in session", result.user);
      // console.log("acctoken", userCredential.accessToken);
    } catch (error) {
      const userCredential = GoogleAuthProvider.credentialFromError(error);
      console.log(error, userCredential);
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInSession) => {
      if (user) {
        setUser(userInSession);
        console.log(userInSession);
      } else {
        setUser(null);
        router.push("/");
      }
    });

    // Returns a function that calls the unsubscribe function when the component unmounts.
    return () => unsubscribe();
  }, [user, router]);

  return (
    <AuthContext.Provider
      value={{ user, register, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
