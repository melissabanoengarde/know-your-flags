"use client";

import { useState } from "react";
import InputField from "./InputField";

import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterForm({ btnText }) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register } = UserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name && form.username && form.email && form.password) {
      setLoading(true);

      try {
        await register(form.name, form.username, form.email, form.password);
        setLoading(false);
        router.push("/game");
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please fill out the form");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {error && <p className="text-xs text-red-300">{error}</p>}

      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <InputField
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            handleChange={handleChange}
          />
          <InputField
            type="text"
            name="username"
            value={form.username}
            placeholder="Username"
            handleChange={handleChange}
          />
        </div>

        <InputField
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          handleChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          handleChange={handleChange}
        />

        <button className="py-1.5 uppercase bg-gray-300 text-white hover:bg-gray-400 duration-100 border-gray-200">
          {loading ? "Connecting..." : `${btnText}`}
        </button>
      </form>
    </>
  );
}
