import React from 'react';
import { Provider } from 'react-redux';

import Point from './Point';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Point />
      </div>
    </Provider>
  )
}

export default App
