import "./map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import loc from '../../img/loc.png'

export default function Map() {
  const addressCoordinates = [40.8157, 44.4857];


  const customMarker = new L.Icon({
    iconUrl: loc,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
   });


  return (
    <div className="map_container">
      <MapContainer
        center={addressCoordinates}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={addressCoordinates} icon={customMarker}>
          <Popup>Vanadzor</Popup>
        </Marker>
      </MapContainer>
      </div>
  );
}
