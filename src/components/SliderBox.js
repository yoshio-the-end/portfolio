import React from 'react';
import '../App.scss';

export default class SlideBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slide__box">
        <img src={this.props.img} className="slide__box__img" />
        <h3 className="slide__box__title">{this.props.title}</h3>
        <p className="slide__box__text">{this.props.dir1}</p>
        <p className="slide__box__text">使用言語:{this.props.dir2}</p>
      </div>
    )
  }
}