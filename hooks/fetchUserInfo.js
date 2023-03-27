"use client";

import { useState, useEffect } from "react";

import { UserAuth } from "@/context/AuthContext";
import { db } from "@/config/firebase";

import { doc, getDoc } from "firebase/firestore";

export default function useFetchUserInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [infos, setInfos] = useState(null);

  const { user } = UserAuth();

  console.log("📍 hiiiiii");

  useEffect(() => {
    const fetchData = async () => {
      console.log("📍 from fetchData");

      try {
        const document = doc(db, "users", user.uid);
        const snapshot = await getDoc(document);

        if (snapshot.exists()) {
          setInfos(snapshot.data().username);
        }
      } catch (error) {
        setError("Failed to load user information");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.uid]);

  return { loading, error, infos, setInfos };
}
