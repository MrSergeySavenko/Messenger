import { combineReducers, createStore, applyMiddleware } from 'redux';
import { messageReducer } from './messageReduser';
import { dropdawnReduser } from './dropdawnReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    messageReducer,
    dropdawnReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
