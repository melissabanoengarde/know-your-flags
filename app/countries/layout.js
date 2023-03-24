import React from "react";

export default function CountriesLayout({ children }) {
  return (
    <section className="grid grid-cols-2 gap-5 pt-5 auto-rows-auto lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </section>
  );
}
