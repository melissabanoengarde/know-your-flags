import Link from "next/link";

export default function CardsLayout({ children }) {
  // console.log(countries);

  return (
    <div className="grid grid-cols-2 gap-5 pt-5 pb-10 auto-rows-auto lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </div>
  );
}
