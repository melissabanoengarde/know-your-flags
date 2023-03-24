import Image from "next/image";

const fetchCountryData = async (name) => {
  let res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields/name,flags`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Country({ params }) {
  console.log("params: ", params);
  const data = await fetchCountryData(params.country);

  const {
    flags,
    name,
    currencies,
    capital,
    region,
    subregion,
    languages,
    timezones,
    population,
  } = data[0];

  // console.log(data[0]);
  // console.log(capital);

  return (
    <div>
      <Image src={flags.png} alt={flags.alt} width={200} height={100} />
      <ul>
        <li>
          <h2>{name.common}</h2>
        </li>
        <li>
          <p>{name.official}</p>
        </li>
        {/* {capital && <li>Capital: {capital[0]}</li>} */}
        {/* <li>
          Currencies: {Object.entries(currencies)[0][0]}{" "}
          {Object.entries(currencies)[0][1].symbol},{" "}
          {Object.entries(currencies)[0][1].name}
        </li> */}
        {/* <li>Region: {region}</li>
        {subregion && <li>Subegion: {subregion}</li>}
        <li>Langues: {Object.values(languages).map((x) => x)}</li>
        <li>Population: {population}</li>
        <li>Timezones: {timezones.map((x) => x)}</li> */}
      </ul>
    </div>
  );
}