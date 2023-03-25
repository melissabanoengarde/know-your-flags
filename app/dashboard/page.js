"use client";

import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { logout } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-6xl">LOGGING OUT......</p>
      ) : (
        <div>
          Dashboard
          <br />
          <br />
          <button
            onClick={handleLogout}
            className="px-10 py-1 bg-gray-200 hover:bg-gray-300"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
