import React from 'react';
import Modal from 'react-modal';
import SlideBox from './SliderBox';
import portfolio from "../img/portfolio.png"
import fmarket from "../img/fmarket.png"
import tellers from "../img/tellers.png"
import danc from "../img/danc.png"

const customStyles = {
  content : {
    zIndex                : '99',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
          <h2 ref={subtitle => this.subtitle = subtitle}>danc</h2>
            <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow02;