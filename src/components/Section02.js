import React from 'react';
import '../App.scss';
import Skills from './Skills';

export default class Section02 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const html = {title:"html",par:"80%"};
    const css = {title:"css",par:"70%"};
    const js = {title:"javascript",par:"40%"};
    const rb = {title:"ruby",par:"60%"};

    return (
      <div id="section02" className="section02">
        <div className="main__article">
          <div className="main__article__container">
            <h2 className="main__article__title">Shoma.Yoshikawa</h2>
            <Skills name={"some string"} skill={html.title} par={html.par}/>
            <Skills name={"some string"} skill={css.title} par={css.par}/>
            <Skills name={"some string"} skill={js.title} par={js.par}/>
            <Skills name={"some string"} skill={rb.title} par={rb.par}/>
          </div>
        </div>
      </div>
    )
  }
}