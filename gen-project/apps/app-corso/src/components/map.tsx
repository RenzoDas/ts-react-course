import { ReactElement } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type Props = {
  coordinates: [number, number]
  zoomLevel?: number
  popupContent?: string | ReactElement
}

export default function Map({ coordinates, zoomLevel = 13, popupContent = "This is your position" }: Props) {
  return (
    <MapContainer center={coordinates} zoom={zoomLevel} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  )
}
