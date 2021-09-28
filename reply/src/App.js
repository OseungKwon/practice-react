import { Button } from "@mui/material";
import React from "react";
import Comment from "./comment/Comment";
import Toast from "./comment/Toast";

const App = () => {
  return (
    <div>
      {/* <div>
        <Toast />
      </div>
      <hr /> */}
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
