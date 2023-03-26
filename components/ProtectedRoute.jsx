"use client";

import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

export function ProtectedRoute(Protected) {
  const ProtectedContent = (props) => {
    const router = useRouter();
    const { user } = UserAuth();

    if (!user) {
      router.push("/");
      return null;
    }

    return <Protected {...props} />;
  };

  return ProtectedContent;
}
