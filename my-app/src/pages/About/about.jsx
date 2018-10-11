import React from "react";
import Bio from "../../components/Bio";
import { Skills } from "../../components/Skills";
import { ProgressBarList } from "../../components/ProgressBarList";

const About = ({ mobile }) => {
  return (
    <div className="section">
      <p className="section-title">
        About <span class="section-logo">_</span>
      </p>
      <div className="container about-grid">
        <Bio classes="Bio" />
        <Skills classes="Skills" />
        <ProgressBarList title="Programming Languages" classes="ProgressBarList" />
      </div>
    </div>
  );
};

export default About;
