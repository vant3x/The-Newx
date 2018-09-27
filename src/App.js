import React, { Component } from 'react';
// components
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          titulo="The Newx"
        />
      </div>
    );
  }
}

export default App;
