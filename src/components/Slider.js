import React, { Component } from "react";
import Slider from "react-slick";
import SlideBox from "./SliderBox";
import portfolio from "../img/portfolio.png"
import fmarket from "../img/fmarket.png"
import tellers from "../img/tellers.png"
import danc from "../img/danc.png"
import ModalWindow00 from "./ModalWindow00";
import ModalWindow01 from "./ModalWindow01";
import ModalWindow02 from "./ModalWindow02";
import ModalWindow03 from "./ModalWindow03";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      centerMode: true,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: 'linear',
      speed: 500,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 561, //767px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <ModalWindow00 />
          <ModalWindow01 />
          <ModalWindow02 />
          <ModalWindow03 />
        </Slider>
      </div>
    );
  }
}