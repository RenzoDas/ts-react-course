import "leaflet/dist/leaflet.css";
import { ReactElement } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Coordinate } from "../types/ip";

type Props = {
  coordinate: Coordinate;
  zoom?: number;
  popupContent?: ReactElement | string;
};

export const Map = ({
  coordinate,
  zoom = 10,
  popupContent = "This is your location",
}: Props) => {
  return (
    <MapContainer
      center={coordinate}
      zoom={zoom}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinate}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  );
};
