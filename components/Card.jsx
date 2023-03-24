import Image from "next/image";

export default function Card({ country, flagPng, flagAlt }) {
  return (
    <div className="border border-gray h-[200px] sm:h-[200px] relative hover:border-green-300 duration-300">
      {/* <div className="absolute z-10 w-full h-full duration-300 hover:backdrop-grayscale hover:bg-green-200/20" /> */}

      <div className="w-full h-[75%] relative border-b-[1px]">
        <Image
          src={flagPng}
          alt={flagAlt ? flagAlt : `Flag of ${country}`}
          fill={true}
          quality={100}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="h-[25%] w-full flex items-center text-gray-400">
        <h2 className="px-3 uppercase md:text-xl">{country}</h2>
      </div>
    </div>
  );
}
