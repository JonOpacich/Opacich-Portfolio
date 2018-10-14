import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-container">
        <div className="image-container image is-4x3">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div className="card-body">
          <h1 className="card-title">{this.props.title}</h1>
          <p className="body-text">{this.props.text}</p>
          <span class="button-container icon is-large">
            <a href={this.props.web} target="blank">
              <i class="fas fa-2x fa-globe card-button" />
            </a>
          </span>
          <span class="button-container icon is-large">
            <a href={this.props.git} target="blank">
              <i class="fab fa-2x fa-github card-button" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  text:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeaconsectetur perspiciatis fugit ipsum mollitia delectus nulla namnesciunt consequatur corrupti, voluptates facilis fugia exercitationem iusto quis, explicabo nemo tempore enim.",
  title: "Placeholder",
  image: "https://via.placeholder.com/350x350"
};
