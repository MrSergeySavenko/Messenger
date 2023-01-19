import { combineReducers, createStore, applyMiddleware } from 'redux';
import { messageReducer } from './messageReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    messageReducer,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
