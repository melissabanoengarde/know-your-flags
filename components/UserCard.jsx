"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "@/config/firebase";

import useFetchUserInfo from "@/hooks/fetchUserInfo";

export default function UserCard() {
  const [info, setInfo] = useState("");
  const router = useRouter();
  const { user } = UserAuth();

  if (!user) {
    router.push("/login");
  }

  const { infos, loading, error } = useFetchUserInfo();
  console.log("fromUSERCARD", infos);

  // const createdAt = user.metadata?.createdAt;
  // const date = createdAt ? new Date(createdAt) : null;

  return (
    <>
      {user && (
        <section className="flex flex-col gap-7">
          {/* Username */}
          <div>
            <small>Username</small>
            <p></p>
          </div>

          {/* Name */}
          <div>
            <small>Name</small>
            <input
              type="text"
              name="name"
              // value={user.displayName}
              value="nameName"
              defaultValue="nameName"
              className="block border outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <small>Email</small>
            <p>{user.email}</p>
          </div>
        </section>
      )}
    </>
  );
}
