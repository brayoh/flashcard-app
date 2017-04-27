import React, { Component } from 'react';
import Sidebar from './Sidebar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar decks={[ { name: 'Deck 1'} ]} addingDeck={true} />
      </div>
    );
  }
}

export default App;
