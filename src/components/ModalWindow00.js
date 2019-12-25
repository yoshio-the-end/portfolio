import React from 'react';
import Modal from 'react-modal';
import SlideBox from './SliderBox';
import portfolio from "../img/portfolio.png"
import fmarket from "../img/fmarket.png"
import tellers from "../img/tellers.png"
import danc from "../img/danc.png"

const customStyles = {
  overlay: {
    zIndex: '98',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0,0,0,0.7)',
  },
  content: {
    zIndex: '99',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh',
    width: '80vw',
    opacity: "1"
  }
};

const slide00 = {img:fmarket,title:"メルカリクローンサイト",direction01:"チーム開発。主にユーザーページ周りを実装",direction02:"HTML,Haml,scss,Ruby,Rails,javascript"};
    const slide01 = {img:tellers,title:"TELLERS",direction01:"個人開発1つ目",direction02:"HTML,Haml,scss,Ruby,Rails"};
    const slide02 = {img:danc,title:"danc",direction01:"個人開発2つ目",direction02:"HTML,Haml,scss,Ruby,Rails,javascript"};
    const slide03 = {img:portfolio,title:"portfolio",direction01:"個人開発3つ目(このページ)",direction02:"HTML,scss,React,JSX"};


Modal.setAppElement('#modal') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow00 extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    this.subtitle.style.color = '#333';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    console.log("modal");
    return (
      <div>
        <button onClick={this.openModal}><SlideBox name={"some string"} img={slide00.img} title={slide00.title} dir1={slide00.direction01} dir2={slide00.direction02}/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <h2 ref={subtitle => this.subtitle = subtitle}>{slide00.title}</h2>
            <div className="modal-container__article">
              <a className="modal-container__article__link" href="http://18.177.78.202/"><img src={fmarket} className="modal-container__article__img" /></a>
              <div className="modal-container__article__textbox">
                <h3 className="modal-container__article__textbox__title">
                  チーム開発【{slide00.title}】
                </h3>
                <p>使用言語：{slide00.direction02}</p>
                <p>チーム開発アプリです。</p>
                <p>課題ではありますが、スクラムを組み、チーム開発をするのは初めてだったので、最初は勝手がわかりませんでした。
                  メルカリのクローンサイトを作成し、チーム内で期日とスプリント目標を持ち、各自が責任をもって開発をしていくことで、チーム開発の流れを学びました。
                  いままで１人での開発が主だったのですが、技術力が違う中で、毎日のデイリースクラムや
                  週１回の勉強会を通じ、自分の技術力の向上はもちろん、アウトプットを積極的にしていくことで
                  チームとしての底力を向上できたと思います。
                </p>
                <span>担当箇所</span>
                <p>■マークアップ</p>
                <ul>
                  <li>ユーザー登録画面</li>
                  <li>ログイン画面</li>
                  <li>ヘッダー、フッター</li>
                  <li>シングルヘッダー、フッター</li>
                  <li>マイページのサイドバー</li>
                  <li>ウィザードフォーム</li>
                </ul>
                <p>■サーバーサイド</p>
                <ul>
                  <li>ウイザードフォームでの会員登録</li>
                  <li>SNS認証での登録/ログイン機能</li>
                  <li>編集機能</li>
                  <li></li>
                </ul>
                <span>気をつけたこと</span>
                <p>チーム開発なので、最初は勝手がわからずフロントのマークアップを終わらせてしまい、
                  少し暴走気味でしたが、朝礼/夕礼時にメンバーの進捗をきき、遅れそうなメンバーに合わせて
                  教えたり、調べたり、勉強会を開いたりしているうちにチーム内のバランスが取れるようになっており、
                  個の集団ではなく、チームとして１つの方向性を向いて動けるようになりました。
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow00;