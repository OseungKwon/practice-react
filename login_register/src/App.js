import React from 'react';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Nav from './component/Nav';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="form-singin">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
