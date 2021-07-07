import React from 'react';
import Subscribers from './component/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './component/Display';
import Views from './component/Views';
import Comments from './component/Comments';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <hr />
        <Views />
        <hr />
        <Display />
      </div>
      <hr />
      <Comments />
    </Provider>
  )
}

export default App
