import Image from "next/image";

export default function Card({ country, flagPng, flagAlt }) {
  return (
    <div className="border border-black">
      <div className="">
        <Image
          src={flagPng}
          alt={flagAlt ? flagAlt : `Flag of ${country}`}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <h2>{country}</h2>
    </div>
  );
}
