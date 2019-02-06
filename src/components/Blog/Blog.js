import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Blog extends React.Component {
  render(){
  return (
    <div className="about-wrapper">
      {this.props.blogPosts.slice(0,1).map(({title, date, img, previewText, text}) =>
      <div id="leftDiv" className="left">
      <img key={img} src={img} />
      <div className="left-info">
      <h1 key={title}>{title}</h1>
      <p key={date}>{date}</p>
      <p key={previewText}>{previewText}</p>
      </div>
      </div>

    )}
    <div className="right">
    {this.props.blogPosts.slice(1,4).map(({title, date, img, previewText, text}) =>
    <div className="post">
      <div className="post-img">
      <img src={img} src={img} />
      </div>
      <div className="post-info">
        <h1 key={title}>{title}</h1>
        <p key={date}>{date}</p>

        <p key={previewText}>{previewText}</p>
      </div>
    </div>
  )}
    </div>
    </div>
  );
}
}

export default Blog;
