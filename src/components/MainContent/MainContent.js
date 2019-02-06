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
            products:false,
            about:false
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
            products:true,
            about:false
          }
        ]
      });

      console.log('show products');
    }
    else if (page == 'about'){
      this.setState({
        componentVisible:[
          {
            blog:false,
            products:false,
            about:true
          }
        ]
      });

      console.log('show about');
    }
  }

  render() {
    const showHideBlog = this.state.componentVisible[0].blog ? "component-page selected" : "component-page";
    const showHideProducts = this.state.componentVisible[0].products ? "component-page selected" : "component-page";
    const showHideAbout = this.state.componentVisible[0].about ? "component-page selected" : "component-page";

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
        <Blog blogPosts = {this.state.blog }/>
      </div>
      <div className={ showHideProducts }>
        <Products productList = { this.state.products } />
      </div>
      <div className={ showHideAbout }>
        <p className="aboutText">Thanks for taking a moment to look around! lifeStack is a cross between a blog and an e-commerce site, as well as a fun way to practice my web dev skills (this is my first site built with react!).</p>

        <p className="aboutText">My goal is to share what technology I use on a daily basis, how I use it for work as a web dev and beyond, and occasional blog posts on an assortment of topics from web dev to tips on the latest game I’m playing.</p>

        <p className="aboutText">If that sounds like it might float your boat, stick around for a while! Once I work out all the code and flesh out my product write-ups I’ll be hoping to post frequently on here about my journey with web development, as well as implement some slick new features as I learn.</p>

        <p className="aboutText">Thanks Again!</p>
        <p className="aboutText">Sean</p>
      </div>
      </div>
    );
  }
}

export default MainContent;
