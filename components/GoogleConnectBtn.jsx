"use client";

import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function GoogleConnectBtn() {
  const [loading, setLoading] = useState(false);
  const { googleLogin } = UserAuth();
  const router = useRouter();

  const handleGoogleConnect = async () => {
    // console.log("clicked on handle google connect");
    try {
      setLoading(true);
      await googleLogin();
      router.push("/countries");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleConnect}
      className="flex items-center justify-center w-full gap-2 py-2 text-gray-400 uppercase duration-100 border border-gray-200 hover:bg-gray-300 hover:text-white"
    >
      {!loading && <BsGoogle size={16} />}
      <span className="text-sm">
        {loading ? "CONNECTING..." : "Connect with Google"}
      </span>
    </button>
  );
}
