import React from "react";
import Slider from "react-slick";

let images = ["https://r.hswstatic.com/w_907/gif/tesla-cat.jpg", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg", "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"]

export default class Portfolio extends React.Component {
  render() {

    const settings = {
      customPaging: function(i) {
        return (
          <a className="thumb-container">
            <img src={images[i]} className="thumb-img"/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad:"ondemand"
    };

    return (
      <div className="section">
        <h2>Portfolio</h2>
        <Slider {...settings}>
          <div>
            <img src={images[0]} />
          </div>
          <div>
            <img src={images[1]} />
          </div>
          <div>
            <img src={images[2]} />
          </div>
          <div>
            <img src={images[3]} />
          </div>
        </Slider>
      </div>
    );
  }
}