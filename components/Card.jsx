import Image from "next/image";

export default function Card({ country, flagPng, flagAlt }) {
  return (
    <div className="border border-black h-[200px] sm:h-[300px]">
      <div className="w-full h-[70%] border-b-black border-b-[2px] relative">
        <Image
          src={flagPng}
          alt={flagAlt ? flagAlt : `Flag of ${country}`}
          // width={1000}
          // height={200}
          fill={true}
          className="object-fill w-full h-auto"
        />
      </div>
      <h2>{country}</h2>
    </div>
  );
}
