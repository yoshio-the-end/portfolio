import React from 'react';
import '../App.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navList = [
      <ul className="header__nav">
        <li className="header__nav__list"><a href="#" className="header__nav__button">プロフィール</a></li>
        <li className="header__nav__list"><a href="#" className="header__nav__button">作品</a></li>
        <li className="header__nav__list"><a href="#" className="header__nav__button">コンタクト</a></li>
      </ul>
    ];
    return (
      <div className="header__wrapper">
        <header className="header">
          <h1 className="header__title">logo</h1>
          {navList}
        </header>
      </div>
    )
  }
}