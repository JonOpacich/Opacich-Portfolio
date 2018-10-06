import React, { Component } from "react";

export class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skillSection">
        <span class="icon has-text-warning is-large">
          <i class={this.props.icon} />
        </span>
        <h1 className="skillSectionTitle title is-2">{this.props.title}</h1>
        <div className="tags">{this.props.children}</div>
      </div>
    );
  }
}
