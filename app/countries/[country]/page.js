import Image from "next/image";

const fetchCountryData = async (name) => {
  let res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,flags,currencies,capital,region,subregion,languages,timezones,population`
  );
  // https://restcountries.com/v3.1/name/Canada?fields=name,flags,currencies,capital,region,subregion,languages,timeszone,population

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
  console.log(capital);

  return (
    <div className="pb-16 text-gray-400">
      <h2 className="text-[7rem] sm:text-[8rem] uppercase  tracking-tighter leading-[0.8] pb-7 cursor-default">
        {name.common}
      </h2>

      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] xl:h-[50vh] 2xl:h-[60vh]">
        <Image
          src={flags.svg}
          alt={flags.alt}
          fill={true}
          className="object-cover w-full h-auto border"
        />
      </div>

      <ul className="grid grid-cols-1 text-gray-400 uppercase cursor-default pt-7 sm:grid-cols-3 md:grid-cols-10 md:gap-3 2xl:grid-cols-12">
        <li className="md:col-start-1 md:col-end-4 xl:col-start-1 xl:col-end-3">
          <ul className="flex flex-col gap-3">
            <li>
              <p className="text-xs">Official name</p>
              <p>{name.official}</p>
            </li>
            {capital && (
              <li>
                <p className="text-xs">Capital</p>
                <p>{capital.map((c) => c)}</p>
              </li>
            )}
          </ul>
        </li>

        <li className="md:col-start-4 md:col-end-7 xl:col-start-3 xl:col-end-5">
          <ul className="flex flex-col gap-3 ">
            <li>
              <p className="text-xs">Region</p>
              <p>{region}</p>
            </li>
            <li>
              <p className="text-xs">Subregion</p>
              <p>{subregion}</p>
            </li>
            <li>
              <p className="text-xs">Timezones</p>
              <p>{timezones.map((x) => x)}</p>
            </li>
          </ul>
        </li>

        <li className="md:col-start-7 md:col-end-10 xl:col-start-5 xl:col-end-7">
          <ul className="flex flex-col gap-3">
            <li>
              <p className="text-xs">Population</p>
              <p>{population}</p>
            </li>
            <li>
              <p className="text-xs">Languages</p>
              <p>
                {Object.values(languages).map((l, i) => (
                  <span key={i}>{l}, </span>
                ))}
              </p>
            </li>
            <li>
              <p className="text-xs">Currencies</p>
              <p>
                {Object.keys(currencies)} (
                {Object.entries(currencies)[0][1].symbol}) —{" "}
                {Object.entries(currencies)[0][1].name}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
