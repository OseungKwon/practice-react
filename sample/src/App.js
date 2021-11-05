import React, { useState } from "react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import faker from "faker";

import "antd/dist/antd.css";
import { Card, Col, Row, Button } from "antd";

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

function App() {
  const [posts, setPosts] = useState([]);
  //console.log(posts);

  const onClickEvent = async (e) => {
    const mockData = await axios.get("/posts");
    setPosts(mockData.data);
  };
  return (
    <>
      <h1 style={{ margin: "0 0 20px 0" }}>Margin Collapse</h1>
      <div style={{ marginTop: "40px" }}>
        <p style={{ marginTop: "30px" }}>What do you think?</p>
      </div>
      <Button onClick={onClickEvent} style={{ margin: "2rem" }}>
        버튼
      </Button>
      <Row>
        {posts?.map((post) => (
          <Col key={post.id}>
            <Card
              title={post.title}
              style={{
                margin: "2rem",
                width: "20rem"
              }}
            >
              <p>{post.content}</p>
              <img src={post.image} alt="img" style={{ width: "100%" }} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default App;
