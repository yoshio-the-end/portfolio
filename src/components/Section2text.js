import React from 'react';
import '../App.scss';

export default class Section02text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section02__textbox">
        <p className="section02__textbox__text">大阪芸術大学附属大阪美術専門学校デザイン科グラフィックデザイン専攻卒業</p>
        <p className="section02__textbox__text">大手飲食チェーンを約8年勤務した後、webエンジニアの門を叩く。</p>
        <p className="section02__textbox__text">現在TECH::EXPART在学中</p>
      </div>
    )
  }
}
