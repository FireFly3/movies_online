import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';

import App from './App';
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

