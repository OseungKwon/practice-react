import React, { useState } from "react";

import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import faker from "faker";

const mock = new AxiosMockAdapter(axios);

const posts = [...Array(23)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: `postId-${setIndex}`,
    title: faker.lorem.words(),
    content: faker.lorem.lines(2),
    image: `${faker.image.animals()}?random=${Math.round(Math.random() * 1000)}`
  };
});

const App = () => {
  return <div></div>;
};

export default App;
