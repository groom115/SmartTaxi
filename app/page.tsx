"use client";

import Booking from "@/Components/Booking/Booking";
import MapBoxMap from "@/Components/Map/MapBoxMap";
import { DestCordiContext } from "@/Context/DestCordiContext";
import { SourceCordiContext } from "@/Context/SourceCordContext";
import { UserLocationContex } from "@/Context/UserLocationContext";
import Image from "next/image";
import { useEffect, useState } from "react";

type LocationProps = {
  lat: number;
  long: number;
};

export default function Home() {
  const [userLocation, setUserLocation] = useState<LocationProps>();
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
  };
  const [sourceCordinates, setSourceCordinates] = useState<any>([]);
  const [destCordinates, setDestCordinates] = useState<any>([]);
  useEffect(() => {
    getUserLocation();
  });
  return (
    <UserLocationContex.Provider value={{ userLocation, setUserLocation }}>
      <SourceCordiContext.Provider
        value={{ sourceCordinates, setSourceCordinates }}
      >
        <DestCordiContext.Provider
          value={{ destCordinates, setDestCordinates }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="">
              <Booking />
            </div>
            <div className="col-span-2">
              <MapBoxMap />
            </div>
          </div>
        </DestCordiContext.Provider>
      </SourceCordiContext.Provider>
    </UserLocationContex.Provider>
  );
}
