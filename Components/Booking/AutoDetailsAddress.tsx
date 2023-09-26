import { DestCordiContext } from "@/Context/DestCordiContext";
import { SourceCordiContext } from "@/Context/SourceCordContext";
import React, { useContext, useEffect, useState } from "react";

const API_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve/";
const SESSION_TOKEN = "082bc384-5d2c-4b61-88aa-b655b0f0fff2";

const AutoDetailsAddress = () => {
  const [source, setSource] = useState<any>("");
  const [dest, setDest] = useState<any>("");
  const [addressList, setaddressList] = useState<any>([]);
  const [sourceChange, setSourceChange] = useState<boolean>(false);
  const [destChange, setDestChange] = useState<boolean>(false);
  const { sourceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destCordinates, setDestCordinates } = useContext(DestCordiContext);

  const getAddress = async () => {
    setaddressList([]);
    const query = sourceChange ? source : dest;
    const response = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setaddressList(result);
  };

  const setSourceClick = async (item: any) => {
    setSource(item.full_address);
    setSourceChange(false);
    setaddressList([]);
    const res = await fetch(
      API_URL +
        item.mapbox_id +
        "?session_token=" +
        SESSION_TOKEN +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );
    const response = await res.json();

    setSourceCordinates({
      lng: response.features[0].geometry.coordinates[0],
      lat: response.features[0].geometry.coordinates[1],
    });
    //console.log(sourceCordinates);
  };

  const setDestClick = async (item: any) => {
    setDest(item.full_address);
    setDestChange(false);
    setaddressList([]);
    const res = await fetch(
      API_URL +
        item.mapbox_id +
        "?session_token=" +
        SESSION_TOKEN +
        "&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    );
    const response = await res.json();

    setDestCordinates({
      lng: response.features[0].geometry.coordinates[0],
      lat: response.features[0].geometry.coordinates[1],
    });
    console.log(destCordinates);
  };

  useEffect(() => {
    const delayFn = setTimeout(() => {
      getAddress();
    }, 1000);
    console.log(addressList);
    return () => clearTimeout(delayFn);
  }, [source, dest]);

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where from?</label>
        <input
          type="text"
          className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
          value={source}
          onChange={(e) => {
            setSourceChange(true);
            setSource(e.target.value);
          }}
        />

        {addressList?.searchResult?.suggestions && sourceChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20"
          >
            {addressList?.searchResult?.suggestions.map(
              (item: any, index: number) => (
                <h2
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSourceClick(item);
                  }}
                >
                  {item.full_address}
                </h2>
              )
            )}
          </div>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="relative">
          <label className="text-gray-400">Where to?</label>
          <input
            type="text"
            className="w-full bg-white p-1 mt-0.5 outline-none border-[1px] focus:border-yellow-300 rounded-md"
            value={dest}
            onChange={(e) => {
              setDestChange(true);
              setDest(e.target.value);
            }}
          />
          {addressList?.searchResult?.suggestions && destChange ? (
            <div
              className="shadow-md p-1 rounded-md
            absolute w-full bg-white z-20"
            >
              {addressList?.searchResult?.suggestions.map(
                (item: any, index: number) => (
                  <h2
                    key={index}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDestClick(item);
                    }}
                  >
                    {item.full_address}
                  </h2>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AutoDetailsAddress;
