import React from 'react';
import '../App.scss';
import {animateScroll as scroll } from 'react-scroll';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToTop=()=>{
    scroll.scrollToTop();
  };
  
  render() {
    return (
      <p onClick={this.scrollToTop} className="header__title">S.yoshikawa</p>
    )
  }
}