import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const BlogModal = ({ info, handleClose, showModal }) => {
  console.log(info);
  const showHideClassName = info[0].show ? "modal modalOn" : "modal modalOff";

  return (
    <div className={ showHideClassName }>
      <div className="modalContent">
        <div className="blogModalImage">
          <img src={info[0].img} />
        </div>
        <div className="blogModalText">
          <h1 className="item">{info[0].title}</h1>
          <h3 className="price">{info[0].date}</h3>
          <div dangerouslySetInnerHTML={{__html: info[0].text }}></div>
        </div>
        <button  className="btnClose" onClick={handleClose}><i class="fas fa-times"></i></button>
      </div>
    </div>
  );

};


export default BlogModal;
