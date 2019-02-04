import React from 'react';
import ReactDOM from 'react-dom';
import JsonProducts from '../../jsonProducts.js';
import Products from '../flexItem/products.js';
import Blog from '../Blog/Blog.js';
import './style.css';

class MainContent extends React.Component {
  constructor(props){
    super(props);
    this.state = JsonProducts;
    const showHideBlog = this.state.componentVisible[0].blog ? "component-page selected" : "component-page";
    const showHideProducts = this.state.componentVisible[0].products ? "component-page selected" : "component-page";

  }
  handleClick(page){
    console.log(page);
    if (page == 'blog'){
      this.setState({
        componentVisible:[
          {
            blog:true,
            products:false
          }
        ]
      });

      console.log('show blog');
    }
    else if (page == 'products'){
      this.setState({
        componentVisible:[
          {
            blog:false,
            products:true
          }
        ]
      });
      console.log('show products');

    }
  }

  render() {
    const showHideBlog = this.state.componentVisible[0].blog ? "component-page selected" : "component-page";
    const showHideProducts = this.state.componentVisible[0].products ? "component-page selected" : "component-page";

    return (
      <div className="main-wrapper">
      <div className="navbar">
        <ul>
          <button className="nav-button" onClick={() => this.handleClick('blog')}><li>Blog</li></button>
          <button className="nav-button" onClick={() => this.handleClick('products')}><li>Products</li></button>
          <button className="nav-button" onClick={() => this.handleClick('about')}><li>About</li></button>
        </ul>
      </div>
      <div className={ showHideBlog }>
        <Blog />
      </div>
      <div className={ showHideProducts }>
        <Products productList = { this.state.products } />
      </div>
      </div>
    );
  }
}

export default MainContent;
