// import { NextResponse } from "next/server";

export async function GET(request) {
  // let res = await fetch("https://restcountries.com/v3.1/all?fields=name");
  // let data = await res.json();
  // // let countryName = data[0].forEach((country) => {
  // //   return country.name.common;
  // // });

  // console.log(data);

  // return new Response({ data });

  return NextResponse.json({ message: "hey" });
}
