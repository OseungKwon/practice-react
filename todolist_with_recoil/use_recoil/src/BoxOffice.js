import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { recoilBoxOfficeState } from "./atoms";

const BoxOffice = () => {
  const BoxOfficeList = useRecoilValueLoadable(recoilBoxOfficeState);
  if (BoxOfficeList.state === "loading") {
    return <div>Loading...</div>;
  }
  const data = BoxOfficeList.contents.boxOfficeResult.weeklyBoxOfficeList;
  console.log("b", BoxOfficeList);
  console.log(data);

  return (
    <div>
      <h1>BoxOffice</h1>
      {data.map((movie) => (
        <div key={movie.rnum}>{movie.movieNm}</div>
      ))}
    </div>
  );
};

export default BoxOffice;
// 새로고침만 하면 문제가 발생
// => state: 'hasValue', 'loading' 잘 파악해서 사용해아함
