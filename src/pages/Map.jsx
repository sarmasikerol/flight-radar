import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const Map = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  const planeIcon = icon({
    iconUrl: "plane_icon.png",
    iconSize: [30, 30],
  });
  return (
    <MapContainer
      center={[39.197953, 35.412556]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker position={[flight.lat, flight.lng]} icon={planeIcon}>
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
