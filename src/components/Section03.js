import React from 'react';
import '../App.scss';
import Skills from './Skills';
import { delighter } from '../delighters.js'
import SimpleSlider from './Slider';

export default class Section03 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="section03" className="section03">
        <div className="main__article">
          <div className="main__article__container">
            <h1 className="main__article__title">Product</h1>
            <SimpleSlider />
          </div>
        </div>
      </div>
    )
  }
}