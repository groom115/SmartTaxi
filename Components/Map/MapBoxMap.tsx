import { UserLocationContex } from "@/Context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { SourceCordiContext } from "@/Context/SourceCordContext";
import { DestCordiContext } from "@/Context/DestCordiContext";

const MapBoxMap = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContex);
  const { sourceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destCordinates, setDestCordinates } = useContext(DestCordiContext);
  const mapRef = useRef<any>();

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
  }, [destCordinates]);

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
          </Map>
        ) : null}
      </div>
    </div>
  );
};

export default MapBoxMap;
