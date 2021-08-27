// const React = require("react");
// const { useState } = React;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WordRelay = () => {
  const [data, setData] = useState({
    a: 0,
    b: 0
  });

  const [sum, setSum] = useState(0);
  const onChange = (e) => {
    const nextData = {
      ...data,
      [e.target.id]: Number(e.target.value)
    };
    setData(nextData);
  };
  console.log("data", data);

  useEffect(() => {
    setSum(data.a + data.b);
    console.log("sum", sum);
  }, [data]);

  return (
    <>
      <div>sample page</div>
      <input onChange={onChange} id="a" />
      <input onChange={onChange} id="b" />
      <div>{sum}</div>
    </>
  );
};

//module.exports = WordRelay;
export default WordRelay;
