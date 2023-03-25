import React from "react";

export default function InputField({
  type,
  name,
  value,
  placeholder,
  handleChange,
}) {
  // console.log(onChange);
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="placeholder:text-gray-300 w-full px-2 py-[0.35rem] border focus:outline-none focus:border-b-green-300"
    />
  );
}
