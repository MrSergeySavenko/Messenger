import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './pages/Main';
import './styles/index.scss';
import { Provider } from 'react-redux';

import { store } from './__data__/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Chat />
    </Provider>
);
