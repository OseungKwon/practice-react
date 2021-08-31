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
        <div>{movie.movieNm}</div>
      ))}
    </div>
  );
};

export default BoxOffice;
