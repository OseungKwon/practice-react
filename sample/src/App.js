import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const btnUp = () => {
    setNum(num + 1);
  };
  const btnDown = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <button onClick={btnUp}>up</button>
      <button onClick={btnDown}>down</button>
      <div>{num}</div>
    </div>
  );
};

export default App;
