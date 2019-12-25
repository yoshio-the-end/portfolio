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
    const slide00 = {img:fmarket,title:"メルカリクローンサイト",direction01:"チーム開発。主にユーザーページ周りを実装",direction02:"HTML,Haml,scss,Ruby,Rails,javascript"};
    const slide01 = {img:tellers,title:"TELLERS",direction01:"個人開発1つ目",direction02:"HTML,Haml,scss,Ruby,Rails"};
    const slide02 = {img:danc,title:"danc",direction01:"個人開発2つ目",direction02:"HTML,Haml,scss,Ruby,Rails,javascript"};
    const slide03 = {img:portfolio,title:"portfolio",direction01:"個人開発3つ目(このページ)",direction02:"HTML,scss,React,JSX"};


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
      slidesToScroll: 1
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