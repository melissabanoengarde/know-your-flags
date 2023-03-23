import Image from "next/image";
import Link from "next/link";

export default function Card({ country, flagPng, flagAlt }) {
  return (
    <Link href={`countries/${country}`}>
      <div>
        <Image src={flagPng} alt={flagAlt} width={100} height={50} />
        <h2>{country}</h2>
      </div>
    </Link>
  );
}
