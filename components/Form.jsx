"use client";
import { useState } from "react";

export default function Form({ btnText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("*submitted*");
  };

  return (
    <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" className="px-2 py-1 border" />

      <button className="py-1.5 uppercase bg-gray-300 text-white hover:bg-gray-400 duration-100">
        {loading ? "Connecting..." : `${btnText}`}
      </button>
    </form>
  );
}
