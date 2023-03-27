"use client";

import { useState, useEffect } from "react";

import { UserAuth } from "@/context/AuthContext";
import { db } from "@/config/firebase";

import { doc, getDoc } from "firebase/firestore";

export default function useFetchUserInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [infos, setInfos] = useState({ username: "" });

  const { user } = UserAuth();

  // console.log("📍 hiiiiii");

  useEffect(() => {
    const fetchData = async () => {
      // console.log("📍 from fetchData");

      try {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setInfos({ ...infos, username: docSnap.data().username });
        } else {
          setInfos(null);
        }
      } catch (error) {
        setError("Failed to load user information");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.email]);

  return { loading, error, infos, setInfos };
}
