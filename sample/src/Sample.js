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

mock.onGet("/posts").reply(() => {
  try {
    const results = posts;
    return [200, results];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

const App = () => {
  return <div></div>;
};

export default App;
