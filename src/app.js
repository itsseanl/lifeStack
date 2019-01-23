import React from 'react';
import ReactDOM from 'react-dom';
import JsonProducts from './jsonProducts.js';
import Products from './components/flexItem/products.js';
import Header from './components/header/header.js';
import About from './components/about/about.js';

import './style.css';

class ReactModalApp extends React.Component {
  constructor(props){
    super(props);
    this.state = JsonProducts;
  }
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <div className="navbar">
          <ul>
            <li>Products</li>
            <li>Programs</li>
            <li>About</li>
          </ul>
        </div>
        <Products productList = {this.state.products} />
        {/*<About />*/} 
      </div>
    );
  }
}



const appRoot = document.getElementById('app');
ReactDOM.render(<ReactModalApp />, document.getElementById('app'));
