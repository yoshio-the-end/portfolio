import React, { Component } from "react";
import Slider from "react-slick";
import SlideBox from "./SliderBox";
import portfolio from "../img/portfolio.png"
import fmarket from "../img/fmarket.png"
import tellers from "../img/tellers.png"
import danc from "../img/danc.png"

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
          <SlideBox name={"some string"} img={slide00.img} title={slide00.title} dir1={slide00.direction01} dir2={slide00.direction02}/>
          <SlideBox name={"some string"} img={slide01.img} title={slide01.title} dir1={slide01.direction01} dir2={slide01.direction02} />
          <SlideBox name={"some string"} img={slide02.img} title={slide02.title} dir1={slide02.direction01} dir2={slide02.direction02} />
          <SlideBox name={"some string"} img={slide03.img} title={slide03.title} dir1={slide03.direction01} dir2={slide03.direction02} />
        </Slider>
      </div>
    );
  }
}