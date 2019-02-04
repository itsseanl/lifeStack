import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import MainContent from './components/MainContent/MainContent.js';

import './style.css';

class ReactModalApp extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <MainContent />
      </div>
    );
  }
}



const appRoot = document.getElementById('app');
ReactDOM.render(<ReactModalApp />, document.getElementById('app'));
