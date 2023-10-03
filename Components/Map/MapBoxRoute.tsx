import React from "react";
import { Layer, Source } from "react-map-gl";

const MapBoxRoute = (props: any) => {
  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: props.coordinates,
        },
        properties: {},
      }}
    >
      <Layer
        id="path"
        type="line"
        source="path"
        layout={{
          "line-join": "round",
          "line-cap": "round",
        }}
        paint={{
          "line-color": "blue",
          "line-width": 4,
        }}
      />
    </Source>
  );
};

export default MapBoxRoute;
