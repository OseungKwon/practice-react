import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { countInputState, countState, inputState } from "./atoms";

const TodoView = () => {
  const [count, setCount] = useRecoilState(countState);
  const [input, setInput] = useRecoilState(inputState);
  const countInput = useRecoilValue(countInputState);
  return (
    <div>
      <p>카운트 {count}</p>
      <p>{countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>숫자 증가</button>
      <button onClick={() => setCount(count - 1)}>숫자 감소</button>
    </div>
  );
};

export default TodoView;
