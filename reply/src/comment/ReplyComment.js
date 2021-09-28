import React, { useState, useEffect, useRef } from "react";
import { Stack, Button, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import uuid from "react-uuid";

import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/comment";
import Markdown from "../component/Markdown";
import { Editor } from "@toast-ui/react-editor";

const ReplyComment = ({ responseTo }) => {
  const [local, setLocal] = useState([]);
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);

  const editorRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();

    let data = {
      content: getContent,
      writer: "jamong",
      postId: "123123",
      responseTo: responseTo,
      commentId: uuid(),
    };
    dispatch(addComment(data));
  };

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter((comment) => comment.responseTo === responseTo));
  }, [comments, responseTo]);
  return (
    <Stack sx={{ m: 1, ml: 4 }}>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "10rem" }}
      >
        {display
          ? "댓글 숨기기"
          : local.length === 0
          ? "댓글 달기"
          : `${local.length}개의 댓글 보기`}
      </Button>

      {display && (
        <div>
          {local.map((comment) => (
            <Box key={comment.commentId}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "orangered" }}>
                  {comment.writer.slice(0, 2)}
                </Avatar>
                <Box sx={{ color: "gray" }}>{comment.writer}</Box>
              </Stack>
              <Box sx={{ padding: "20px 20px" }}>
                <Markdown comment={comment} />
              </Box>
              <ReplyComment responseTo={comment.commentId} />
            </Box>
          ))}

          <Editor
            ref={editorRef} //initialValue={"내용을 입력해주세요."}
          />

          <div>
            <button onClick={onSubmit}>저장</button>
          </div>
        </div>
      )}
    </Stack>
  );
};

export default ReplyComment;
