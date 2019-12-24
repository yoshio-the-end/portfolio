import React from 'react';
import '../App.scss';
import Skills from './Skills';
import { delighter } from '../delighters.js'

export default class Section04 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   return (
      <div id="section04" className="section04">
        <div className="main__article">
          <div className="main__article__container">
          </div>
        </div>
      </div>
    )
  }
}