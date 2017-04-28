import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers/reducers';
import App from './components/App';
import * as localStore from './stores/localStorage';
import VisibleCards from './components/VisibleCards';
import NewCardModal from './components/NewCardModal';

reducers.routing = routerReducer;

const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store)

function init() {
    let state = store.getState();
    localStore.set(state, ['decks', 'cards'])

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App}>
                    <Route path='/deck/:deckId' component={VisibleCards}>
                        <Route path='/deck/:deckId/new' component={NewCardModal}></Route>
                    </Route>
                </Route>
            </Router>
        </Provider>, document.getElementById('root'));
}

init();
store.subscribe(init);
