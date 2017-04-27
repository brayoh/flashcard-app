import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers/reducers';
import './styles/App.css';

const store = createStore(combineReducers( reducers ));

function run() {
    let state = store.getState();
    console.log(state)
    ReactDOM.render(
        <Provider store={store}>
            <Sidebar/>
        </Provider>, document.getElementById('root'));
}

run();
store.subscribe(run);
