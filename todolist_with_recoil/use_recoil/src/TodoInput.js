import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "./atoms";

const TodoInput = () => {
  const [Text, setText] = useState("");
  const [todo, setTodo] = useRecoilState(todoState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo(todo.concat(Text));
    setText("");
  };

  return (
    <div>
      <label>TodoLIST</label>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={Text}
          placeholder="일정 입력"
          onChange={onChange}
        />
        <button>확인</button>
      </form>
    </div>
  );
};

export default TodoInput;
