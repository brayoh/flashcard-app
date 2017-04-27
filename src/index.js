import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';
import { showDeck, hideDeck, addDeck } from './actions/actions';
import {store} from './stores/store';
import './styles/App.css';

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render(
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={ name => store.dispatch(addDeck(name)) }
            showAddDeck={() => store.dispatch(showDeck())}
            hideAddDeck={() => store.dispatch(hideDeck())}
        />, document.getElementById('root'));
}

run();
store.subscribe(run);
