"use client";

import { useState, useEffect } from "react";

import { UserAuth } from "@/context/AuthContext";
import { db } from "@/config/firebase";

import { doc, getDoc } from "firebase/firestore";

export default function useFetchUserInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [infos, setInfos] = useState({
    username: "",
    recentScore: null,
    highScore: null,
  });

  const { user } = UserAuth();

  useEffect(() => {
    if (!user || !user.email) {
      return;
    }

    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setInfos({
            ...infos,
            username: docSnap.data().username,
            recentScore: docSnap.data().recentScore,
            highScore: docSnap.data().highScore,
          });
          console.log("just executed!");
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
  }, [user, setInfos]);

  return { loading, error, infos, setInfos };
}
