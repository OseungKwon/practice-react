import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import faker from "faker";

let mock = new AxiosMockAdapter(axios);

let posts = [...Array(23)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: `0feb2990-4210-4170-93a4-37e8f5958a18-${setIndex}`,
    cover: "",
    title: faker.lorem.lines(10),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/mock-images/avatars/avatar_${setIndex}.jpg`
    }
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
