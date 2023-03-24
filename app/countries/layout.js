import React from "react";

export default function CountriesLayout({ children }) {
  return (
    <section className="grid grid-cols-1 pt-5 border md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </section>
  );
}
