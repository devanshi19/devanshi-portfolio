import React from "react";
import HeroBaner from "../../Components/Hero-baner/HeroBaner";
import Bio from "../../Components/BioComponent/Bio";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  return (
    <div className="portfoilo-wrap container">
      <HeroBaner />
      <Bio />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
