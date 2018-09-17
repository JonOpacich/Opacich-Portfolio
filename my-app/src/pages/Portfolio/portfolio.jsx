import React, { Component } from "react";
import Slider from "react-slick";

let images= ["http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"]

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="section">
        <Slider
        className="horizontal"
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={true}
          verticalSwiping={true}
        >
          <div>
            <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
          <div>
          <img src={images[0]} alt="" className="horizontal-img"/>
          </div>
        </Slider>
      </div>
    );
  }
}
