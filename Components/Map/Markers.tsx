import { UserLocationContex } from "@/Context/UserLocationContext";
import React, { useContext } from "react";
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { SourceCordiContext } from "@/Context/SourceCordContext";
import { DestCordiContext } from "@/Context/DestCordiContext";

const Markers = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContex);
  const { sourceCordinates, setSourceCordinates } =
    useContext(SourceCordiContext);
  const { destCordinates, setDestCordinates } = useContext(DestCordiContext);
  return (
    <div>
      {sourceCordinates.length != 0 ? (
        <Marker
          longitude={sourceCordinates?.lng}
          latitude={sourceCordinates?.lat}
          anchor="bottom"
        >
          <img src="./pin.png" alt="mark" className="w-10 h-10" />
        </Marker>
      ) : null}

      {destCordinates.length != 0 ? (
        <Marker
          longitude={destCordinates?.lng}
          latitude={destCordinates?.lat}
          anchor="bottom"
        >
          <img src="./pin.png" alt="mark" className="w-10 h-10" />
        </Marker>
      ) : null}
    </div>
  );
};

export default Markers;
