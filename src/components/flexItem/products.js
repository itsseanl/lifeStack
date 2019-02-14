import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal/Modal.js';
import './style.css';

class Products extends React.Component {
  constructor(){
    super();
    this.state = {
      modal: [
        {
      show:false,
      name:'',
      price:'',
      description:'',
      image:''
    }
  ]
    };
  }
  showModal(name, price, description, image){
    this.setState({
      modal: [
        {
        show: true,
        name: name,
        price: price,
        description: description,
        image:image
      }
    ]
  });
  }
  hideModal() {
    let newState = this.state;
    console.log(newState);
    newState.modal[0].show = false;
    this.setState(newState);
  }
  handleClick(){
    alert('clicked');
  }

  render(){
  return (
    <div className="wrapper">
    <Modal info={this.state.modal} handleClose={this.hideModal.bind(this)} showModal={this.showModal.bind(this)}/>
      {this.props.productList.map(({name, price, description, image}) =>
      <button className="btnModal" onClick={() => this.showModal(name, price, description, image)}>
        <div className="flexItem">
        
          <img key={image} src={image} className="img"/>

          <p key={name}>{name}</p>
          <p key={price}>{price}</p>
          {/*<p key ={description}>{description}</p>*/}
        </div>
     </button>
    )}
    </div>
  );
};
}

export default Products;
