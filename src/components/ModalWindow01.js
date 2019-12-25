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
const slide01 = { img: tellers, title: "TELLERS", direction01: "個人開発1つ目", direction02: "HTML,scss,Ruby,Rails,jQuery" };

Modal.setAppElement('#modal') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow01 extends React.Component {
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
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
    this.subtitle.style.color = '#333';
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log("modal");
    return (
      <div>
        <button onClick={this.openModal}><SlideBox name={"some string"} img={slide01.img} title={slide01.title} dir1={slide01.direction01} dir2={slide01.direction02} />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <h2 ref={subtitle => this.subtitle = subtitle}>TELLERS</h2>
            <div className="modal-container__article">
              <a className="modal-container__article__link" href="http://yahoo.co.jp"><img src={tellers} className="modal-container__article__img" /></a>
              <div className="modal-container__article__textbox">
                <h3 className="modal-container__article__textbox__title">
                  個人開発アプリ1つ目【{slide01.title}】
                </h3>
                <p>使用言語：{slide01.direction02}</p>
                <p>個人制作アプリ１つ目です。</p>
                <p>アプリの概要は、ユーザーが自由に怪談や都市伝説や
                  怖い話などオカルトに関するショートストーリーを投稿し、
                  閲覧できるオカルト情報の収集アプリケーションです。<br />
                  機能自体はシンプルですが、DB設計から全て自分の力でフロント、バックエンドまで実装したため
                  アプリケーションを作り上げる流れが把握できました。
                </p>
                <span>実装機能</span>
                <p>追加gem:devise,jquery-rails</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow01;