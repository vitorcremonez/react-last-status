import React, { Component } from 'react';
import LastStatus from "./LastStatus";

class App extends Component {
  render() {
    return (
      <div>
        <LastStatus timestamp={0}/>
      </div>
    );
  }
}

export default App;
