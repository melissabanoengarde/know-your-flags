"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import useFetchUserInfo from "@/hooks/fetchUserInfo";

import { BiCheck, BiX } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";

export default function UserCard() {
  const { infos } = useFetchUserInfo();

  const [username, setUsername] = useState("");
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [editing, setEditing] = useState(false);

  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    setUsername(infos.username);
    setUpdatedUsername(infos.username);

    if (!user) {
      router.push("/login");
    }
  }, [infos.username, user, router]);

  const updateDbUsername = async () => {
    const docRef = doc(db, "users", user.email);
    await setDoc(docRef, { username: updatedUsername });
  };

  const cancelUpdateUsername = () => {
    setUpdatedUsername(username);
    setEditing(false);
  };

  return (
    <>
      {user && (
        <section className="flex flex-col w-full pt-8 text-gray-400 uppercase gap-7 sm:w-[400px]">
          {/* Username */}
          <div>
            <small className="text-xs select-none">Username</small>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditing(false);
                updateDbUsername();
              }}
            >
              <div
                className={`flex items-center justify-between gap-3 ${
                  editing ? "border-b-[1px] border-gray-300" : ""
                }`}
              >
                <input
                  type="text"
                  name="username"
                  className="w-3/5 outline-none cursor-default "
                  value={updatedUsername}
                  onChange={(e) => setUpdatedUsername(e.target.value)}
                  readOnly={!editing}
                />
                {!editing ? (
                  <div className="cursor-pointer">
                    <MdModeEditOutline
                      size={18}
                      onClick={() => {
                        setEditing(true);
                      }}
                      className="h-full hover:text-gray-500"
                    />
                  </div>
                ) : (
                  <div className="flex duration-100">
                    <BiCheck
                      className="cursor-pointer hover:text-green-500/50"
                      size={22}
                      onClick={() => {
                        setEditing(false);
                        updateDbUsername();
                      }}
                    />
                    <BiX
                      className="cursor-pointer hover:text-gray-500"
                      size={22}
                      onClick={cancelUpdateUsername}
                    />
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Name */}
          <div>
            <small className="text-xs select-none">Name</small>
            <p>{user.displayName}</p>
          </div>

          {/* Email */}
          <div>
            <small className="text-xs select-none">Email</small>
            <p>{user.email}</p>
          </div>
        </section>
      )}
    </>
  );
}
