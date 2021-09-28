import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addComment } from "../redux/comment";
import ReplyComment from "./ReplyComment";

import { Stack, Button, Avatar } from "@mui/material";
import { Box } from "@mui/system";

// markdown, toast editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import Markdown from "../component/Markdown";

const Comment = () => {
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const [display, setDisplay] = useState(false);
  const editorRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);

    // 데이터 저장
    // setCommentValule(text);
    let data = {
      content: getContent,
      writer: "jamong",
      postId: "123123",
      responseTo: "root",
      commentId: uuid(),
    };
    dispatch(addComment(data));
  };

  // Save toast
  // const onClick = () => {};

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [comments]);
  return (
    <Stack sx={{ m: 5 }}>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "10rem" }}
      >
        답변 달기
      </Button>
      {display && (
        <>
          <Editor ref={editorRef} />
          <div>
            <button onClick={onSubmit}>저장</button>
          </div>
        </>
      )}

      {local.map((comment, index) => (
        <Box sx={{ m: 2 }} key={comment.commentId}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ bgcolor: "orangered", width: "2rem", height: "2rem" }}
            >
              {comment.writer.slice(0, 2)}
            </Avatar>
            <Box
              sx={{
                color: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {comment.writer}
            </Box>
          </Stack>
          <Box key={index} sx={{ padding: "0px 20px" }}>
            <Markdown comment={comment} />
          </Box>
          <ReplyComment responseTo={comment.commentId} />
          <hr style={{ borderTop: "1px solid gray" }} />
        </Box>
      ))}
    </Stack>
  );
};

export default Comment;
