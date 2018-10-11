import React, { Component } from "react";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.classes}>
        <img
          src="/images/Jon5.jpg"
          alt="Personal Headshot"
          className="headshot"
        />
        
        <p className="bio">
          Having spent over 3 years in a small pharmacology laboratory
          designing, publishing and presenting scientific research, I bring
          strong management and problem-solving skills to my passion for web
          development. I enjoy working with innovative teams on the cutting-edge
          of design to create intuitive, unique front-ends, streamline workflows
          and meet tight deadlines.
        </p>
      </div>
    );
  }
}

export default Bio;
