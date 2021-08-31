// Atom은 상태(state)일부를 나타낸다.
// 어떤 컴포넌트에서나 읽고 쓸 수 있으며
// atom 값을 읽는 컴포넌트들은 암문적으로 atom을 구독한다.
// 따라서 atom 변환 => 구독하는 컴포넌트들의 리렌더링

import { atom, selector } from "recoil";

export const recoilBoxOfficeState = selector({
  key: "recoilBoxOfficeState",
  get: async () => {
    const res = await fetch(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
    );

    return await res.json();
  }
});
