import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
      <Register />
      <hr />
      <Login />
    </div>
  );
};

export default App;
