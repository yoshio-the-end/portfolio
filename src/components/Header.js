import React from 'react';
import '../App.scss';
import Title from './Title';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navList = [
      <ul className="header__nav">
        <li className="header__nav__list">
          <a href="#section02" className="header__nav__button">プロフィール</a>
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