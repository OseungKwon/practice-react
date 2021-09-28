import { Button } from "@mui/material";
import React from "react";
import Comment from "./comment/Comment";

// 수정할 사항
/*
 - text-editor가 상위 margin으로 인해 사이즈 점점 줄어들음.
 - 컴포넌트 분리
 - 스타일 분리
*/

const App = () => {
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          데이터 삭제
        </Button>

        <Comment />
      </div>
    </div>
  );
};

export default App;
