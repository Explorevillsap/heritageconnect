import { useState } from "react";
import { sites, states } from "../data/sites";
import SiteCard from "../components/SiteCard";

export default function Explore() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? sites : sites.filter(s => s.stateId === filter);
  return <main className="section">
    <div className="section-head">
      <div><span className="eyebrow">HERITAGE DIRECTORY</span><h1>Explore Sites</h1></div>
    </div>
    <div className="filters">
      <button className={filter==="all"?"active":""} onClick={()=>setFilter("all")}>All States</button>
      {states.map(s=><button key={s.id} className={filter===s.id?"active":""} onClick={()=>setFilter(s.id)}>{s.short} · {s.name}</button>)}
    </div>
    <div className="site-grid">{visible.map(site=><SiteCard site={site} key={site.id}/>)}</div>
  </main>
}