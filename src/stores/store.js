/* eslint-disable */
import {createStore, combineReducers} from 'redux';

export const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: + new Date
            });
            return state.concat([newCard]);
        default:
            return state || [];
            break;
    }
};
const store = createStore(combineReducers({
    cards
}));
