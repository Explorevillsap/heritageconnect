import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  { q: "Which state contains Sanchi Stupa?", options:["Uttar Pradesh","Madhya Pradesh","Rajasthan","Bihar"], a:1 },
  { q: "Prayagraj belongs to which state?", options:["Madhya Pradesh","Bihar","Uttar Pradesh","Rajasthan"], a:2 },
  { q: "Khajuraho is famous for its historic...", options:["Temple architecture","Modern stadium","Railway station","Beach"], a:0 },
  { q: "Hawa Mahal is in...", options:["Jaipur","Gwalior","Sanchi","Prayagraj"], a:0 },
  { q: "Mahabodhi Temple is located at...", options:["Bodh Gaya","Nalanda","Jaipur","Gwalior"], a:0 }
];

export default function Quiz() {
  const [answers,setAnswers]=useState({});
  const [score,setScore]=useState(null);
  const submit=()=>{
    let s=questions.reduce((n,x,i)=>n+(answers[i]===x.a?1:0),0);
    setScore(s);
    localStorage.setItem("heritagePoints", String(s*10));
  };
  return <main className="section quiz">
    <span className="eyebrow">LEARN & EARN</span><h1>Heritage Quiz</h1>
    <p>Answer 5 questions and earn Heritage Points.</p>
    {questions.map((x,i)=><div className="question" key={x.q}>
      <h3>Q{i+1}. {x.q}</h3>
      {x.options.map((o,j)=><label key={o}><input type="radio" name={`q${i}`} checked={answers[i]===j} onChange={()=>setAnswers({...answers,[i]:j})}/>{o}</label>)}
    </div>)}
    <button className="primary-btn" onClick={submit}>Submit Quiz</button>
    {score!==null && <div className="result"><h2>🎉 Score: {score}/5</h2><p>You earned {score*10} Heritage Points.</p><Link to="/explore">Explore more monuments →</Link></div>}
  </main>
}