import React from 'react';
import '../App.scss';
import ContactIcons from './ContactIcons';

export default class Section04 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   return (
      <div id="section04" className="section04">
        <div className="main__article">
          <div className="main__article__container">
            <h1 className="main__article__title">Contact</h1>
            <ContactIcons />
          </div>
        </div>
      </div>
    )
  }
}