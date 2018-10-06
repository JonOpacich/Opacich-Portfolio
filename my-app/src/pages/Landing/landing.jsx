import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="section landing-Page">
        <div className="greeting">
          Hello there! I'm{" "}
          <a
            className="name"
            href="https://github.com/JonOpacich"
            target="blank"
          >
            Jon Opacich
          </a>{" "}
          Currently creating beautiful stuff in Minneapolis, MN
        </div>
        <a href="#Portfolio">
          <span className="icon chevron">
            <i class="fas fa-chevron-down" />
          </span>
        </a>
      </div>
    );

    Landing.propTypes = {
      children: PropTypes.node
    };
  }
}
