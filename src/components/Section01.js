import React from 'react';
import '../App.scss';
import MainImg from '../img/main_img.png';
import TitleSvg from './TitleSvg';

export default class Section01 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="top" className="section01">
        <div className="main__article">
          <img src={MainImg} alt="main" className="main__article__img" />
          <div className="main__article__container">
            <h1 className="main__article__title">Shoma.Yoshikawa</h1>
            <TitleSvg />
            <p className="main__article__text">I want to be a Front-end engineer</p>
          </div>
        </div>
      </div>
    )
  }
}