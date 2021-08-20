import React from "react";
import Nav from './Nav.js'

class Screen extends React.Component {

  render() {
    //const className = 'Screen'
    const { name } = this.props;
    return (


      <div className = 'screen'>
      <Nav />


      </div>

    );
  }
}

export default Screen;