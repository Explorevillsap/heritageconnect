import { useParams, Link } from "react-router-dom";
import { getSite, getState } from "../data/sites";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function SiteDetails() {
  const { id } = useParams();
  const site = getSite(id);
  const [speaking, setSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  if (!site) {
    return (
      <main className="section">
        <h1>Site not found</h1>
        <Link className="primary-btn" to="/explore">Back to Explore</Link>
      </main>
    );
  }

  const state = getState(site.stateId);
  const url = `${window.location.origin}/site/${site.id}`;

  const speak = () => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(
      `${site.name}. Located in ${site.location}. ${site.history} Interesting facts: ${site.facts.join(". ")}.`
    );
    u.lang = "en-IN";
    u.rate = 0.9;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this monument link:", url);
    }
  };

  return (
    <main className="section">
      <Link className="back" to={`/map/${site.stateId}`}>
        ← Back to {state?.name || "State"} map
      </Link>

      <div className="detail-layout">
        <div>
          <div className="monument-cover">
            🏛️
            <span>📍 {site.city}, {state?.name}</span>
          </div>

          <div className="detail-card">
            <span className="eyebrow">{site.location}</span>
            <h1>{site.name}</h1>
            <p className="lead">{site.description}</p>

            <div className="facts-row">
              <span>📅 {site.year}</span>
              <span>📍 {site.city}</span>
              <span>🗺️ {site.lat.toFixed(4)}, {site.lng.toFixed(4)}</span>
            </div>

            <h2>History</h2>
            <p>{site.history}</p>

            <h2>Interesting Facts</h2>
            <ul>{site.facts.map(f => <li key={f}>{f}</li>)}</ul>

            <div className="action-row">
              <button className="primary-btn" onClick={speak}>
                {speaking ? "🔊 Speaking..." : "🔊 Listen to History"}
              </button>
              <Link className="secondary-btn" to={`/quiz?site=${site.id}`}>
                🎯 Take Quiz
              </Link>
              <Link className="secondary-btn" to={`/map/${site.stateId}`}>
                📍 Open State Map
              </Link>
            </div>
          </div>
        </div>

        <aside className="qr-card">
          <h3>📱 Scan to Open Full Details</h3>
          <QRCodeSVG value={url} size={190} includeMargin />
          <p>
            Scan this QR with a phone camera. It opens this exact monument page,
            including its history, facts, audio, quiz and map link.
          </p>
          <button className="secondary-btn" onClick={copyLink}>
            {copied ? "✅ Link Copied" : "🔗 Copy Monument Link"}
          </button>
          <small className="qr-note">
            QR works after the website is hosted on a public URL. A localhost
            address can only be opened on the same device.
          </small>
        </aside>
      </div>
    </main>
  );
}
