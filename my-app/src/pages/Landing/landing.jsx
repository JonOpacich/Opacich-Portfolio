import React from "react";
import PropTypes from "prop-types";

let section = {};
let nav = {
  position: "fixed",
  top: 10,
  left: 40,
  right: 40
};

const Landing = ({ children }) => (
  <div className="section" style={section}>
    <div className="greeting">
      Hello there! I'm <a className="name" href="https://github.com/JonOpacich" target="blank">Jon Opacich</a> Currently creating
      beautiful stuff in Minneapolis, MN
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

export default Landing;
