import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">🏛️ HeritageConnect</Link>
      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/map">Map</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/report">Report</Link>
      </div>
    </nav>
  );
}