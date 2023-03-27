import { GameContainer, PlayContent } from "@/components";

const fetchCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Play() {
  const countries = await fetchCountries();
  return (
    <section className="w-full subtract-header-height">
      <GameContainer>
        <PlayContent countries={countries} />
      </GameContainer>
    </section>
  );
}
