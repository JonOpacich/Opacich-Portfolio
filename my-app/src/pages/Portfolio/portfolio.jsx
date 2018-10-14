import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../components/Card";
let images = [
  "/images/ArtsposeLogo.png",
  "/images/KarmaLogo.jpg",
  "/images/SessionLogo.jpg"
];

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true
    };
    return (
      <div className="section">
        <p className="section-title">
          Projects <span class="section-logo">_</span>
        </p>
        <Slider {...settings}>
          <Card image={images[0]} title="Artsposé" web=" https://artspose.herokuapp.com/" git="https://github.com/JonOpacich/Artspose" text="An application intended to be utilized by Art Patrons to find and explore new mediums and artist portfolios. We seek to help the local Minneapolis Public discover new art and artists."/>
          <Card image={images[1]} title="Karma" web="https://kar-ma.herokuapp.com/" git="https://github.com/JonOpacich/Karma" text="Karma is a community engagement and service-exchange application that utilizes time as currency. We believe everyone's time is valuable and Karma allows neighbors to share their talents and improve their overall community."/>
          <Card image={images[2]} title="Session" web="https://session-a4950.firebaseapp.com/" git="https://github.com/JonOpacich/Session_Study_Together" text = "A full-stack Firebase web app leveraging Google Maps to help students create and join study groups."/>
          <Card image="https://cdn.freshome.com/wp-content/uploads/2018/01/decorator-living.jpg" title="Lagom Interior Design" web="#" git="#" text="-Currently in Development- A Duluth-based business that contracts with construction companies to create better, more inspired interior layouts. Lagom's success with construction has inspired them to branch out into other areas of interior design, and I've been contracted to create their website. "/>
        </Slider>
      </div>
    );
  }
}
