import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addComment } from "../redux/comment";
import ReplyComment from "./ReplyComment";

import { Stack, TextField, Button, Avatar } from "@mui/material";
import { border, Box } from "@mui/system";

// markdown, toast editor
import Prism from "prismjs";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import ReactMarkdown from "react-markdown";
import Markdown from "../component/Markdown";

const Comment = () => {
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const [commentValue, setCommentValule] = useState("");
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
            <Avatar sx={{ bgcolor: "orangered" }}>
              {comment.writer.slice(0, 2)}
            </Avatar>
            <Box sx={{ color: "gray" }}>{comment.writer}</Box>
          </Stack>
          <Box key={index} sx={{ padding: "20px 20px" }}>
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
