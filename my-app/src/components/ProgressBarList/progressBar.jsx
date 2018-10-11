import React, { Component } from "react";

const progressBar = {
  width: 330,
  display: "inline",
};

const title = {
  marginRight:"1vw",
};
const progressBarWrapper={
  marginBottom:10
}

export class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={progressBarWrapper}>
        <span className="title is-5" style={title}>
          {this.props.title}
        </span>
        <progress
          className="progress is-info"
          value={this.props.value}
          max="100"
          style={progressBar}
        >
          {this.props.value}
        </progress>
      </div>
    );
  }
}
