import { useState } from "react";
import { sites } from "../data/sites";

export default function Report() {
  const [form,setForm]=useState({site:sites[0].id,problem:"Broken wall",description:""});
  const [done,setDone]=useState(false);
  const submit=(e)=>{
    e.preventDefault();
    const old=JSON.parse(localStorage.getItem("heritageReports")||"[]");
    localStorage.setItem("heritageReports",JSON.stringify([...old,{...form,createdAt:new Date().toISOString()}]));
    setDone(true);
  };
  return <main className="section narrow">
    <span className="eyebrow">PRESERVE HERITAGE</span><h1>Report a Heritage Problem</h1>
    <p>For this prototype, reports are stored locally in your browser.</p>
    <form className="form-card" onSubmit={submit}>
      <label>Site<select value={form.site} onChange={e=>setForm({...form,site:e.target.value})}>{sites.map(s=><option key={s.id} value={s.id}>{s.name} — {s.city}</option>)}</select></label>
      <label>Problem<select value={form.problem} onChange={e=>setForm({...form,problem:e.target.value})}><option>Broken wall</option><option>Damage / cracks</option><option>Waste / cleanliness</option><option>Signboard missing</option><option>Other</option></select></label>
      <label>Description<textarea rows="6" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Describe the issue..."/></label>
      <label>Upload Photo<input type="file" accept="image/*"/></label>
      <button className="primary-btn">Submit Report</button>
      {done && <div className="success">✅ Report saved successfully for this demo.</div>}
    </form>
  </main>
}