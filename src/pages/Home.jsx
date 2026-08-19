import { Link } from "react-router-dom";
import { states, sites } from "../data/sites";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">DIGITAL HERITAGE PLATFORM</span>
          <h1> CheckbyAdi Discover India's Heritage,<br/><span>State by State.</span></h1>
          <p>Explore monuments on interactive maps, read their history, listen to stories, take quizzes and help preserve heritage.</p>
          <Link className="primary-btn" to="/explore">Explore Heritage →</Link>
        </div>
        <div className="hero-art">🏛️<br/><small>Explore • Learn • Preserve</small></div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><span className="eyebrow">SELECT A REGION</span><h2>Explore by State</h2></div>
          <Link to="/map">Open Full Map →</Link>
        </div>
        <div className="state-grid">
          {states.map((state) => {
            const count = sites.filter(s => s.stateId === state.id).length;
            return <Link className="state-card" to={`/map/${state.id}`} key={state.id}>
              <div className="state-emoji">{state.emoji}</div>
              <div><h3>{state.name}</h3><p>{count} mapped heritage sites</p></div>
              <span>→</span>
            </Link>
          })}
        </div>
      </section>

      <section className="feature-strip">
        <div><b>📍 Interactive Maps</b><span>Pin-by-pin monument discovery</span></div>
        <div><b>🔊 Audio History</b><span>Listen to stories in your browser</span></div>
        <div><b>🎯 Heritage Quiz</b><span>Learn and earn points</span></div>
        <div><b>🛡️ Report Damage</b><span>Help preserve heritage</span></div>
      </section>
    </>
  );
}