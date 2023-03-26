import { GameContainer } from "@/components";

const fetchCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );
  return res.json();
};

export default async function Play() {
  const countries = await fetchCountries();
  console.log(countries);
  return (
    <section className="w-full border border-red-200 subtract-header-height">
      <GameContainer>
        <div>Flag</div>
        <div>tags</div>
      </GameContainer>
    </section>
  );
}
