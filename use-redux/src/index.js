import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
