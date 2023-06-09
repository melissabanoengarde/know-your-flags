import Link from "next/link";
import { Card, CardsLayout, CountriesLayout } from "@/components";

const fetchCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Countries() {
  const countries = await fetchCountries();

  // const alphabeticalOrder = Object.values(countries.name).sort();
  // console.log(alphabeticalOrder);

  return (
    <CardsLayout>
      {/* <CountriesLayout countries={countries} /> */}
      {countries?.map((country, index) => (
        <div key={index}>
          <Link href={`countries/${country.name.common}`}>
            <Card
              country={country.name.common}
              flagPng={country.flags.svg}
              flagAlt={country.flags.alt}
            />
          </Link>
        </div>
      ))}
    </CardsLayout>
  );
}
