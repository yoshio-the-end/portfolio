import React from 'react';
import ReactDom from 'react-dom'
import Header from "./components/Header";
import Main from "./components/Main";
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
