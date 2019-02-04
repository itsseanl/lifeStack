import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Blog extends React.Component {
  render(){
  return (
    <div className="about-wrapper">
    <div className="left">
      <div className="left-info">
        <h1>Post Title</h1>
        <p>
        Preview text Preview text Preview text Preview text Preview text Preview text Preview text
        Preview text Preview text Preview text</p>
      </div>
    </div>

    <div className="right">

    <div className="post">
      <div className="post-img">
      </div>
      <div className="post-info">
        <p>Post Title</p>
        <p>February 1st, 2019</p>
        <p>
        Preview text Preview text Preview text Preview text Preview text Preview text Preview text
        Preview text Preview text Preview text</p>
      </div>
      </div>
    <div className="post">
      <div className="post-img">
      </div>
      <div className="post-info">
        <h1>Post Title</h1>
        <p>
        Preview text Preview text Preview text Preview text Preview text Preview text Preview text
        Preview text Preview text Preview text</p>
      </div>
      </div>
    <div className="post">
      <div className="post-img">
      </div>
      <div className="post-info">
        <h1>Post Title</h1>
        <p>
        Preview text Preview text Preview text Preview text Preview text Preview text Preview text
        Preview text Preview text Preview text</p>
      </div>
      </div>
    </div>
    </div>
  );
}
}

export default Blog;
