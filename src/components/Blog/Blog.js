import React from 'react';
import ReactDOM from 'react-dom';
import BlogModal from '../BlogModal/BlogModal.js';
import './style.css';

class Blog extends React.Component {
  constructor(){
    super();
    this.state = {
      blogModal: [
        {
      show:false,
      title:'',
      date:'',
      img:'',
      text:''
    }
  ]
    };
  }
  showModal(title, date, img, text){
    this.setState({
      blogModal: [
        {
        show: true,
        title:title,
        date:date,
        img:img,
        text:text
      }
    ]
  });
  }
  hideModal() {
    let newState = this.state;
    console.log(newState);
    newState.blogModal[0].show = false;
    this.setState(newState);
  }
  render(){
  return (
    <div className="about-wrapper">
    <BlogModal info={this.state.blogModal} handleClose={this.hideModal.bind(this)} showModal={this.showModal.bind(this)}/>

      {this.props.blogPosts.slice(0,1).map(({title, date, img, previewText, text}) =>
      <a className="btnModal" onClick={() => this.showModal(title, date, img, text)}>

      <div id="leftDiv" className="left">
      <img key={img} src={img} />
      <div className="left-info">
      <h1 key={title}>{title}</h1>
      <p key={date}>{date}</p>
      <p key={previewText} dangerouslySetInnerHTML={{__html: previewText}}></p>
      </div>
      </div>
      </a>
    )}
    <div className="right">
    {this.props.blogPosts.slice(1,4).map(({title, date, img, previewText, text}) =>
    <a className="post" onClick={() => this.showModal(title, date, img, text)}>

      <div className="post-img">
      <img src={img} src={img} />
      </div>
      <div className="post-info">
        <h1 key={title}>{title}</h1>
        <p key={date}>{date}</p>

        <p key={previewText} dangerouslySetInnerHTML={{__html: previewText}}></p>
    </div>
    </a>
  )}
    </div>
    </div>
  );
}
}

export default Blog;
