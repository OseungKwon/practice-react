import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
