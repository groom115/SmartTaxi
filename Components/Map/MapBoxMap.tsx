import { UserLocationContex } from "@/Context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { SourceCordiContext } from "@/Context/SourceCordContext";
import { DestCordiContext } from "@/Context/DestCordiContext";
import { DirectionDataContext } from "@/Context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";
import DistanceTime from "./DistanceTime";

const BASE_URL = "https://api.mapbox.com/directions/v5/mapbox/driving/";
const SESSION_TOKEN = "082bc384-5d2c-4b61-88aa-b655b0f0fff2";

const MapBoxMap = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContex);
  const { sourceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destCordinates, setDestCordinates } = useContext(DestCordiContext);
  const mapRef = useRef<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  useEffect(() => {
    if (sourceCordinates) {
      mapRef?.current?.flyTo({
        center: [sourceCordinates.lng, sourceCordinates.lat],
        duration: 2500,
      });
    }
  }, [sourceCordinates]);

  useEffect(() => {
    if (destCordinates) {
      mapRef?.current?.flyTo({
        center: [destCordinates.lng, destCordinates.lat],
        duration: 2500,
      });
    }

    if (sourceCordinates && destCordinates) {
      getDirectionRoute();
    }
  }, [destCordinates]);

  const getDirectionRoute = async () => {
    const res = await fetch(
      BASE_URL +
        sourceCordinates.lng +
        "," +
        sourceCordinates.lat +
        ";" +
        destCordinates.lng +
        "," +
        destCordinates.lat +
        "?overview=full&geometries=geojson&access_token=" +
        process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
    setDirectionData(result);
  };

  return (
    <div className="p-4">
      <h1 className=" text-[20px] font-semibold">Map</h1>
      <div className="rounded-lg overflow-hidden mt-1">
        {userLocation ? (
          <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.long,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width: "100%", height: 550, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />
            {directionData?.routes ? (
              <MapBoxRoute
                coordinates={directionData?.routes[0]?.geometry?.coordinates}
              />
            ) : null}
          </Map>
        ) : null}
      </div>
      <div className="absolute bottom-[80px] z-20 right-[20px] hidden md:block">
        <DistanceTime />
      </div>
    </div>
  );
};

export default MapBoxMap;
