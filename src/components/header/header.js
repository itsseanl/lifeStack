import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scroll:true,
      visible:false
    };
  }

  handleScroll(){
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight,
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    let windowsScrollTop  = window.pageYOffset;
    console.log(windowsScrollTop + ' ' + height);
    console.log(height*0.25);
           if(windowsScrollTop >= height*0.25){
             this.setState({ scroll: false, visible:true});

           }else{
             this.setState({ scroll: true, visible:false});
           }
  };

  componentDidMount() {
    console.log(this.titleref);

   window.addEventListener('scroll', this.handleScroll);
  }
 render(){
   const fluidFixedClassName = this.state.scroll ? "titleh1" : "titleh1 fixed";
   const hiddenVisibleClassName = this.state.visible ? "titleh6 visible": "title h6";
  return (
    <div className="header">
      <div className="overlay">

        <h1 className={fluidFixedClassName}>lifeStack <i class="fas fa-align-left headerI"></i></h1>
        <h6 className={hiddenVisibleClassName}>Technology for Every Day</h6>
      </div>
    </div>
  );
}
};

export default Header;
