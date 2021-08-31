// Atom은 상태(state)일부를 나타낸다.
// 어떤 컴포넌트에서나 읽고 쓸 수 있으며
// atom 값을 읽는 컴포넌트들은 암문적으로 atom을 구독한다.
// 따라서 atom 변환 => 구독하는 컴포넌트들의 리렌더링

import { atom, selector } from "recoil";

export const inputState = atom({
  key: "inputState", // 고유 키
  default: [] // 초기 값
});

export const countState = atom({
  key: "countState",
  default: 0
});

// selector는 파생된 상태의 일부를 나타냄
// 여기서 파생된 상태 === 상태의 변화
export const countInputState = selector({
  key: "countInputState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)}이고 ${get(inputState)}`;
  }
});
