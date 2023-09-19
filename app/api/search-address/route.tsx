import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";
export async function GET(request: any) {
  const { searchParams } = new URL(request.url);

  const searchText = searchParams.get("q");

  const res = await fetch(
    BASE_URL +
      "?q=" +
      searchText +
      "?language=en&limit=6&session_token=082bc384-5d2c-4b61-88aa-b655b0f0fff2&country=IN" +
      "&access_token=" +
      process.env.MAPBOX_ACCESS_TOKEN,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const searchResult = await res.json();

  return NextResponse.json({ searchResult });
}
