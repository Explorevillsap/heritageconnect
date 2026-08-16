import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getSitesByState, getState, sites, states } from "../data/sites";
import MapView from "../components/MapView";

export default function MapPage() {
  const { stateId } = useParams();
  const state = stateId ? getState(stateId) : null;
  const mapped = useMemo(
    () => state ? getSitesByState(state.id) : sites,
    [state]
  );

  const center = mapped.length ? [mapped[0].lat, mapped[0].lng] : [25.4, 82.0];

  return (
    <main className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">📍 INTERACTIVE HERITAGE MAP</span>
          <h1>{state ? `${state.name} Heritage Map` : "India Heritage Map"}</h1>
          <p>
            Select a state, then click any 📍 pin to see the monument name,
            location and a link to its complete details.
          </p>
        </div>
      </div>

      <div className="state-map-tabs">
        <Link className={!stateId ? "map-tab active" : "map-tab"} to="/map">
          🇮🇳 All States
        </Link>
        {states.map(s => (
          <Link
            key={s.id}
            className={stateId === s.id ? "map-tab active" : "map-tab"}
            to={`/map/${s.id}`}
          >
            {s.emoji} {s.short} · {s.name}
          </Link>
        ))}
      </div>

      <div className="map-help">
        <b>How it works:</b> 📍 Pin → click → monument popup → <b>View Full Details</b>
        → history + facts + audio + QR + quiz + state map.
      </div>

      <MapView sites={mapped} center={center} zoom={state ? 7 : 5} />

      <div className="map-list">
        {mapped.map(s => (
          <Link key={s.id} to={`/site/${s.id}`}>
            <b>📍 {s.name}</b>
            <span>{s.city}, {s.location.split(", ").pop()}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
