import React from 'react';
import '../App.scss';
import MainImg from '../img/main_img.png'
import Section01 from './Section01';
import Section02 from './Section02';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <Section01 />
        <Section02 />
      </div>
    )
  }
}