import Screen from './Screen'
import React from "react";

class App extends React.Component {
  render() {
    const className = 'App'
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Screen />

      </>
    );
  }
}

export default App;
