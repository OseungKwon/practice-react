import React from "react";
import { Route, Switch } from 'react-router-dom'
import TodoList from "./Todo/TodoList";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";

const App = () => {
  return (
    <>
      <Route exact path="/todo" component={TodoList} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </>
  );
};

export default App;
