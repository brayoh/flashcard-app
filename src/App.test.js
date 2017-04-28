import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import App from './components/App';
import {Sidebar} from './components/Sidebar';
import * as reducers from './reducers/reducers';
import { showDeck, hideDeck, addDeck } from './actions/actions';

const store = createStore(combineReducers(reducers));

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, div);
    });
});

describe('Sidebar', () => {
    it('random test', () => {
        const container = document.createElement('div');
        const time = <h2>All Decks</h2>;
        var sidebar = ReactDOM.render(
            <Sidebar
                decks={[]}
                addDeck={ name => store.dispatch(name) }
                showDeck={() => store.dispatch(showDeck()) }
                hideDeck={() => store.dispatch(hideDeck()) }
             />, container);
        //expect(ReactDOM.findDOMNode(sidebar.refs.add)).toEqual(true);
    })
});
