import React from 'react';
import '../App.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Arrow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="arrowBox">
        <Link
          activeClass="active"
          className="downarrow"
          to="section04"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        ><i class="fas fa-angle-double-down" /></Link>
        <Link
          activeClass="active"
          className="uparrow"
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        ><i class="fas fa-angle-double-up" /></Link>
      </div>
    )
  }
}