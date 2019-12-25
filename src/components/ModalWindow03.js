import React from 'react';
import Modal from 'react-modal';
import SlideBox from './SliderBox';
import portfolio from "../img/portfolio.png"

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
    const slide03 = {img:portfolio,title:"portfolio",direction01:"個人開発3つ目(このページ)",direction02:"HTML,scss,React,JSX"};
    
Modal.setAppElement('#modal') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow03 extends React.Component {
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
        <button onClick={this.openModal}><SlideBox name={"some string"} img={slide03.img} title={slide03.title} dir1={slide03.direction01} dir2={slide03.direction02}/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <h2 ref={subtitle => this.subtitle = subtitle}>{slide03.title}</h2>
            <div className="modal-container__article">
              <a className="modal-container__article__link" href="http://shomayoshikawa-portfolio.s3-website-ap-northeast-1.amazonaws.com/"><img src={portfolio} className="modal-container__article__img" /></a>
              <div className="modal-container__article__textbox">
                <h3 className="modal-container__article__textbox__title">
                  React開発【{slide03.title}】
                </h3>
                <p>使用言語：{slide03.direction02}</p>
                <p>Reactでのポートフォリオサイト開発です。</p>
                <p>センタリングで上下左右の余白をしっかり残すことで、
                  伝えたい情報がしっかり視認できるように工夫しました。
                </p>
                <p>全体のレイアウトとしましては、ブロークングリッドの考えを継承し、
                  ヘッダー、ページ間の境界線を全て斜めに配置し、単なる１ページスライドのSPAではなく、
                  スタイリッシュな印象を持ってもらえるよう工夫しました。ナビーバーは縦に遷移していくページなので、
                  通常の横並びではなく縦並びに、ハンバーガーでは現在どこにいるのかわからなく立ってしまうことを防ぐため、
                  あえてページ上部に邪魔しない程度に配置しました。
                </p>
                <p>また、せっかくReactで作るのでページ遷移をしない1ページで完結させるため、
                  この説明画面はモーダル表示に、制作物一覧はスライドショーにしました。
                  これにより閲覧時にページ遷移の手間がなくなり、直感的に操作できるようになると思います。
                </p>
                <span>追加パッケージ:</span>
                <p>react-slick,react-modal,react-scroll</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow03;