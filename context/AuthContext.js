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

import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Tracks user
  const [user, setUser] = useState({});
  const router = useRouter();

  const register = async (name, username, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    // store username
    const userRef = doc(db, "users", user.email);
    await setDoc(userRef, {
      username: username,
    });

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
        console.log("AuthContext", userInSession);
      } else {
        setUser({});
        router.push("/login");
      }
    });

    // Returns a function that calls the unsubscribe function when the component unmounts.
    return () => {
      unsubscribe;
    };
  }, []);

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
