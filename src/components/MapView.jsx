import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function MapView({ sites, center, zoom = 6 }) {
  return (
    <div className="map-wrap">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sites.map(site => (
          <Marker key={site.id} position={[site.lat, site.lng]} icon={icon}>
            <Popup>
              <div className="popup">
                <strong>📍 {site.name}</strong>
                <span>{site.city}</span>
                <span>{site.location}</span>
                <small>{site.description}</small>
                <Link to={`/site/${site.id}`}>View Full Details →</Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
