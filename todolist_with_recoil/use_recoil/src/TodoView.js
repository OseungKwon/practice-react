import React from "react";
import { useRecoilValue } from "recoil";
import { getTodo } from "./atoms";

const TodoView = () => {
  const todo = useRecoilValue(getTodo);
  return (
    <ul>
      {todo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoView;
