import React from 'react';
import ReactDom from 'react-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import './App.scss';
import Arrow from './components/Arrow';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Arrow />
      <Main />
    </div>
  );
}

export default App;
