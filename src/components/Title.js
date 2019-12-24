import React from 'react';
import '../App.scss';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll'
import logo from '../img/logo.svg'

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Link
        className="header__title"
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={0}
        duration={300}
      ><img src={logo} />portfolio</Link>
    )
  }
}