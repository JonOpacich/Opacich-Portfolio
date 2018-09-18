import React from "react";

const About = ({ mobile }) => {
  return (
    <div className="section">
      <p className="section-title">
        About <span class="section-logo">_</span>
      </p>
      <div className="container">
        <div className="columns">
          <div className="column">
              <img
                src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
                alt="Personal Headshot"
                className="headshot"
              />
            <p className="bio">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aut
              accusantium, exercitationem nulla animi commodi tempora dolores
              tenetur, odit maxime ipsum at ex voluptas quia delectus
              consequatur dolore earum suscipit.
            </p>
          </div>
          <div className="column">column 2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
