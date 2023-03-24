"use client";
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <form className="p-2 border">
      <input type="email" placeholder="Email" className="border" />
      <button>Login</button>
    </form>
  );
}
