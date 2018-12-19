import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";

import { createStore, applyMiddleware, compose } from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import mailReducer from "./store/reducers/mailReducer";

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  mailReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById("root"));

registerServiceWorker();
