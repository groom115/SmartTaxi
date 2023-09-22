import { UserLocationContex } from "@/Context/UserLocationContext";
import React, { useContext } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBoxMap = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContex);
  return (
    <div className="p-4">
      <h1 className=" text-[20px] font-semibold">Map</h1>
      <div className="rounded-lg overflow-hidden mt-1">
        {userLocation ? (
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.long,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width: "100%", height: 550, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              longitude={userLocation?.long}
              latitude={userLocation?.lat}
              anchor="bottom"
            >
              <img src="./pin.png" alt="mark" className="w-10 h-10" />
            </Marker>
          </Map>
        ) : null}
      </div>
    </div>
  );
};

export default MapBoxMap;
