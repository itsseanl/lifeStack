import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Modal = ({ info, handleClose, showModal }) => {
  console.log(info);
  const showHideClassName = info[0].show ? "modal modalOn" : "modal modalOff";

  return (
    <div className={ showHideClassName }>
      <div className="modalContent">
        <div className="modalImage">
          <img src={info[0].image} />
        </div>
        <div className="modalText">
        <article>
          <h1 className="item">{info[0].name}</h1>
          <h3 className="price">{info[0].price}</h3>
          <p key={info[0].desription} className="description" dangerouslySetInnerHTML={{__html: info[0].description}}></p>
        </article>
        </div>
        <button  className="btnClose" onClick={handleClose}><i class="fas fa-times"></i></button>
      </div>
    </div>
  );

};


export default Modal;
