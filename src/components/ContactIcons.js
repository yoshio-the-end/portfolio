import React from 'react';
import '../App.scss';

export default class ContactIcons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="main__article__icons">
        <a href="https://twitter.com/ZN59FOGeBBTQ0et" className="main__article__icons__icon"><i class="fab fa-twitter-square"></i></a>
        <a href="#" className="main__article__icons__icon"><i class="fab fa-line"></i></a>
        <a href="https://www.instagram.com/xamhos/?hl=ja" className="main__article__icons__icon"><i class="fab fa-instagram"></i></a>
      </div>
    )
  }
}