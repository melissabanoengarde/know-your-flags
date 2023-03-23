import { Card } from "@/components";

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

export default async function Countries() {
  const countries = await fetchCountries();

  return (
    <section className="">
      <ul>
        {countries.map((country, i) => (
          <li key={i}>
            <Card
              country={country.name.common}
              flagPng={country.flags.png}
              flagAlt={country.flags.alt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
