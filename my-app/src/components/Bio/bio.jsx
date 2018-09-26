import React, { Component } from "react";

const nav = {
  position: "fixed",
  right: "5vw",
  left: "5vw",
  top: 20,
  zIndex: 1
};
const name = {
  position: "absolute",
  left: 100,
  zIndex: 1,
  fontSize: "2rem"
};

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="column">
        <img
          src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
          alt="Personal Headshot"
          className="headshot"
        />
        <p className="bio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aut
          accusantium, exercitationem nulla animi commodi tempora dolores
          tenetur, odit maxime ipsum at ex voluptas quia delectus consequatur
          dolore earum suscipit.
        </p>
      </div>
    );
  }
}

export default Bio;
