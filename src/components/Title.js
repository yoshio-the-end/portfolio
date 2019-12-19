import React from 'react';
import '../App.scss';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href="/" className="header__title">S.yoshikawa</a>
    )
  }
}