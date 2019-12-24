import React from 'react';
import '../App.scss';
import Skills from './Skills';
import Section02text from './Section2text';
import { delighter } from '../delighters.js'

export default class Section02 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const html = {title:"html",par:"90%"};
    const css = {title:"css",par:"65%"};
    const js = {title:"javascript",par:"50%"};
    const rb = {title:"ruby",par:"50%"};
    const ai = {title:"illustrator",par:"50%"};
    const ps = {title:"photoshop",par:"70%"};

    return (
      <div id="section02" className="section02">
        <div className="main__article">
          <div className="main__article__container">
            <h2 className="main__article__title">Shoma.Yoshikawa</h2>
            <Section02text />
            <Skills name={"some string"} skill={html.title} par={html.par}/>
            <Skills name={"some string"} skill={css.title} par={css.par}/>
            <Skills name={"some string"} skill={js.title} par={js.par}/>
            <Skills name={"some string"} skill={rb.title} par={rb.par}/>
            <Skills name={"some string"} skill={ai.title} par={ai.par}/>
            <Skills name={"some string"} skill={ps.title} par={ps.par}/>
          </div>
        </div>
      </div>
    )
  }
}