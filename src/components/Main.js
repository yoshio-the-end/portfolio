import React from 'react';
import '../App.scss';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div className="main-container">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
      </div>
    )
  }
}