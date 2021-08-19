import React from "react";
class Screen extends React.Component {

  render() {
    //const className = 'Screen'
    const { name } = this.props;
    return (
      <div class = 'screen'>
       <h2>Screen View</h2>
      </div>
    );
  }
}

export default Screen;