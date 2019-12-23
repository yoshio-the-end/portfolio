import React from 'react';
import '../App.scss';
import Title from './Title';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let navList = [
      <ul className="header__nav">
        <li className="header__nav__list">
          <Link
            activeClass="active"
            className="header__nav__button"
            activeClass="active"
            to="section02"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >Profile</Link>
        </li>
        <li className="header__nav__list">
          <a href="#" className="header__nav__button">作品</a>
        </li>
        <li className="header__nav__list">
          <a href="#" className="header__nav__button">コンタクト</a>
        </li>
      </ul>
    ];

    return (
      <header className="header">
        <div className="logo__box"></div>
        <Title />
        {navList}
      </header>
    )
  }
}