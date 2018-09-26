import React from "react";
import Bio from "../../components/Bio";
import {Skills} from "../../components/Skills"

const About = ({ mobile }) => {
  return (
    <div className="section">
      <p className="section-title">
        About <span class="section-logo">_</span>
      </p>
      <div className="container">
        <div className="columns">
          <Bio/>
          <Skills/>
        </div>
      </div>
    </div>
  );
};

export default About;
