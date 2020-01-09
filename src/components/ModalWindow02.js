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
class ModalWindow02 extends React.Component {
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
        <button onClick={this.openModal}><SlideBox name={"some string"} img={slide02.img} title={slide02.title} dir1={slide02.direction01} dir2={slide02.direction02}/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <h2 ref={subtitle => this.subtitle = subtitle}>{slide02.title}</h2>
            <div className="modal-container__article">
              <a className="modal-container__article__link" href="http://ddaanncc.herokuapp.com/"><img src={danc} className="modal-container__article__img" /></a>
              <div className="modal-container__article__textbox">
                <h3 className="modal-container__article__textbox__title">
                  個人開発アプリ２つ目【{slide02.title}】
                </h3>
                <p>使用言語：{slide02.direction02}</p>
                <p>個人制作アプリ２つ目です。</p>
                <p>アプリの概要は、ユーザーが新たに公開したサービスや
                  アプリケーションなどを画像を用いて公開するサービスです。<br />
                  日々新しいものを求める好奇心旺盛なユーザーと、
                  新規公開したサービスをより多くのユーザーに知ってもらいたい開発者を繋ぐサイトになればいいと思います。
                </p>
                <span>実装機能</span>
                <p>追加gem:devise,jquery-rails</p>
                <p>使用ライブラリ:Slick</p>
                <ul>
                  <li>ユーザー登録</li>
                  <li>ログイン/ログアウト</li>
                  <li>新規投稿</li>
                  <li>投稿編集/削除</li>
                  <li>インクリメンタルサーチ</li>
                  <li>画像投稿機能</li>
                  <li>新着順のスライドショー機能</li>
                  <li>ロゴ作成</li>
                </ul>
                <span>気をつけたこと</span>
                <p>1ページスライドで端的にトップビューとサイトの説明を画像を用いてユーザーに見せることで、
                  サイト自体のインパクトと、視覚的にパッとみてわかりやすいサイトを目指しました。
                </p>
                <p>今回はロゴのデザインもしました。</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow02;