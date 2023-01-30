import { combineReducers, createStore, applyMiddleware } from 'redux';
import { messageReducer } from './messageReduser';
import { fetchChatsReduser } from './fetchChatsReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    messageReducer,
    fetchChatsReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
