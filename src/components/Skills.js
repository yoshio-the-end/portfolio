import React from 'react';
import '../App.scss';

export default class Skills extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="skills">
      <span className="Name">{this.props.skill}</span>
      <div className="percent">
        <div className="progress" style={{width:this.props.par}}></div>
      </div>
      <span className="Value">{this.props.par}</span>
      </div>
    )
  }
}