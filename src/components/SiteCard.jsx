import { Link } from "react-router-dom";

export default function SiteCard({ site }) {
  return (
    <article className="site-card">
      <div className="site-icon">📍</div>
      <div>
        <span className="muted">{site.city}</span>
        <h3>{site.name}</h3>
        <p>{site.description}</p>
        <Link className="small-btn" to={`/site/${site.id}`}>Explore Site</Link>
      </div>
    </article>
  );
}