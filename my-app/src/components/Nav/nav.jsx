import React, { Component } from "react";

const nav = {
  position: "fixed",
  right: 80,
  left: 80,
  top: 20,
  zIndex: 1
};
const name = {
  position: "absolute",
  left: 100,
  top: -15
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div class="tabs is-boxed is-right" style={nav}>
        <a href="#Landing">
          <p className="subtitle is-1" style={name}>
            Jon Opacich <span id="logo">_</span>
          </p>
        </a>
        <ul id="menu">
          <li class="" data-menuanchor="About">
            <a href="#About">
              <span class="icon is-small">
                <i class="fas fa-code" aria-hidden="true" />
              </span>
              <span>About</span>
            </a>
          </li>
          <li data-menuanchor="Portfolio">
            <a href="#Portfolio">
              <span class="icon is-small">
                <i class="far fa-folder-open" aria-hidden="true" />
              </span>
              <span>Portfolio</span>
            </a>
          </li>
          <li data-menuanchor="Contact">
            <a href="#Contact">
              <span class="icon is-small">
                <i class="far fa-envelope" aria-hidden="true" />
              </span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
