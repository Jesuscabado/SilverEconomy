import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer
      center={[43.25, -2.91667]}
      zoom={12}
      style={{ height: "500px" }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
    </MapContainer>
  );
};

export default MapComponent;
