import Image from "next/image";

export default function Card({ country, flagPng, flagAlt }) {
  return (
    <div className="border border-gray h-[200px] sm:h-[250px] relative">
      <div className="absolute z-10 w-full h-full duration-300 hover:bg-green-500/10 hover:backdrop-grayscale" />

      <div className="w-full h-[70%] relative ">
        <Image
          src={flagPng}
          alt={flagAlt ? flagAlt : `Flag of ${country}`}
          fill={true}
          className="object-fill w-full h-auto backdrop-grayscale"
        />
      </div>

      <div className="h-[30%] w-full flex items-center">
        <h2 className="px-3 text-xl uppercase">{country}</h2>
      </div>
    </div>
  );
}
