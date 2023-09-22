"use client";

import Booking from "@/Components/Booking/Booking";
import MapBoxMap from "@/Components/Map/MapBoxMap";
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
  useEffect(() => {
    getUserLocation();
  });
  return (
    <UserLocationContex.Provider value={{ userLocation, setUserLocation }}>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="">
          <Booking />
        </div>
        <div className="col-span-2">
          <MapBoxMap />
        </div>
      </div>
    </UserLocationContex.Provider>
  );
}
