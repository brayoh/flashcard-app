import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers/reducers';
import { fetchData } from './actions/actions';
import App from './components/App';
import VisibleCards from './components/VisibleCards';
import NewCardModal from './components/NewCardModal';
import EditCardModal from './components/EditCardModal';
import StudyModal from './components/StudyModal';

reducers.routing = routerReducer;

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store)

function run() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App}>
                    <Route path='/deck/:deckId' component={VisibleCards}>
                        <Route path='/deck/:deckId/new' component={NewCardModal} />
                        <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal} />
                        <Route path='/deck/:deckId/study' component={StudyModal} />
                    </Route>
                </Route>
            </Router>
        </Provider>, document.getElementById('root'));
}

function save() {
  var state = store.getState();

  fetch('http://127.0.0.1:5000/api/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      decks: state.decks,
      cards: state.cards
    })
  });
}

function init () {
  run();
  store.subscribe(run);
  store.subscribe(save);
  store.dispatch(fetchData());
}

init();
