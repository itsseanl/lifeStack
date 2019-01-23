import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class About extends React.Component {
  render(){
  return (
    <div className="aboutWrapper">
      <div className="info">
      <p>Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat.</p>
      </div>
    </div>
  );
}
}

export default About;
