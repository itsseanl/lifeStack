import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const BlogModal = ({ info, handleClose, showModal }) => {
  console.log(info);
  const showHideClassName = info[0].show ? "modal modalOn" : "modal modalOff";

  return (
    <div className={ showHideClassName }>
      <div className="blogModalContent">
      <article>
        <div className="blogModalImage">
          <img src={info[0].img} />
        </div>
        <div className="blogModalText">
          <h1 className="item">{info[0].title}</h1>
          <h3 className="price">{info[0].date}</h3>
          <div dangerouslySetInnerHTML={{__html: info[0].text }}>
          </div>
<div id="amzn-assoc-ad-b24487a7-11a0-4c3d-91a1-5edca93e6e67"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=b24487a7-11a0-4c3d-91a1-5edca93e6e67"></script>
        </div>
        <button  className="btnClose" onClick={handleClose}><i class="fas fa-times"></i></button>
        </article>
      </div>
    </div>
  );

};


export default BlogModal;
