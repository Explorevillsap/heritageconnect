import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import MapPage from "./pages/MapPage";
import SiteDetails from "./pages/SiteDetails";
import Quiz from "./pages/Quiz";
import Report from "./pages/Report";

export default function App(){
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/map" element={<MapPage/>}/>
      <Route path="/map/:stateId" element={<MapPage/>}/>
      <Route path="/site/:id" element={<SiteDetails/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
    <footer>© 2026 HeritageConnect · Discover · Learn · Preserve</footer>
  </>;
}