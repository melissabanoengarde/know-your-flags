"use client";
import { UserAuth } from "@/context/AuthContext";

export default function Tags() {
  const { user } = UserAuth();

  if (!user) {
    return null;
  }
  return <div>Tags</div>;
}
