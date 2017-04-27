import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar />
      </div>
    );
  }
}

export default App;
