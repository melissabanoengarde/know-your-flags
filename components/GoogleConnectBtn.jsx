"use client";

import { BsGoogle } from "react-icons/bs";

export default function GoogleConnectBtn() {
  const handleGoogleConnect = () => {
    console.log("clicked on handle google connect");
  };

  return (
    <button
      onClick={handleGoogleConnect}
      className="flex items-center justify-center w-full gap-2 py-2 text-gray-400 uppercase duration-100 border border-gray-200 hover:bg-gray-300 hover:text-white"
    >
      <BsGoogle size={16} />
      <span className="text-sm">Connect with Google</span>
    </button>
  );
}
