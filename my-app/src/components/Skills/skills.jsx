import React, { Component } from "react";
import {SkillSection} from "./skillSection";


export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="column">
          <div className="skills-container">
          <SkillSection icon="fa-github"/>
          </div>
        </div>
    );
  }
}
