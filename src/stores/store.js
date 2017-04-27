import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers/reducers';

export const store = createStore(combineReducers( reducers ));
