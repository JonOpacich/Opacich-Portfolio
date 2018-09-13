import React from "react";
import Slider from "react-slick";

let images = ["https://r.hswstatic.com/w_907/gif/tesla-cat.jpg", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg", "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg", "https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"]

export default class Portfolio extends React.Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={images[i]} height={30} width={30}/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="section">
        <h2>Portfolio</h2>
        <Slider {...settings}>
          <div>
            <img src={"https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"} />
          </div>
          <div>
            <img src={"https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"} />
          </div>
          <div>
            <img src={"https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"} />
          </div>
          <div>
            <img src={"https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}