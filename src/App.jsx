import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Videoshow } from "./components/videoShow";
import { Copywrite } from "./components/generlaCopywrite";
import { Services } from "./components/services";
import { DAppBook } from "./components/dAppBook"; 
import { Team } from "./components/Team"; 
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Videoshow data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Videoshow data={landingPageData.Features} />
      <Copywrite data={landingPageData.About} />
      
      <Videoshow data={landingPageData.Features} />
      <DAppBook />  
      <Team data={landingPageData.Team} /> 
    </div>
  );
};

export default App;
