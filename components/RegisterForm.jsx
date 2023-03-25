"use client";

import { useState } from "react";
import InputField from "./InputField";

import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterForm({ btnText }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // console.log({ ...form });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register } = UserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("*submitted*");

    if (form.name && form.email && form.password) {
      setLoading(true);

      try {
        await register(form.name, form.email, form.password);
        setLoading(false);
        router.push("/countries");
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
    console.log(e.target.name);
  };

  return (
    <>
      {error && <p className="text-xs text-red-300">{error}</p>}

      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          handleChange={handleChange}
        />
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

// name + username
// const [username, setUsername] = useState("");
/* <div className="flex gap-2">
        <InputField
          type="text"
          placeholder="Name"
          onChange={() => setName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Username"
          onChange={() => setUsername(e.target.value)}
        />
      </div> */
