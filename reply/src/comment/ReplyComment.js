import React, { useState, useEffect, useRef } from "react";
import { Stack, Button, Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import uuid from "react-uuid";

import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/comment";
import Markdown from "../component/Markdown";
import { Editor } from "@toast-ui/react-editor";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "1rem",
}));

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
    const date = new Date();

    let data = {
      content: getContent,
      writer: "jamong",
      postId: "123123",
      responseTo: responseTo,
      commentId: uuid(),
      created_at: `${date}`,
    };
    dispatch(addComment(data));
  };

  //시간
  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

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
        sx={{ display: "flex", justifyContent: "flex-start", width: "10rem" }}
      >
        {display
          ? "댓글 숨기기"
          : local.length === 0
          ? "댓글 달기"
          : `${local.length}개의 댓글 보기`}
      </Button>

      {display && (
        <div>
          {local.map((comment, index) => (
            <Box sx={{ m: 2 }} key={comment.commentId}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ bgcolor: "orangered", width: "2rem", height: "2rem" }}
                >
                  {comment.writer.slice(0, 2)}
                </Avatar>
                <Item>{comment.writer}</Item>
                <Item>{timeForToday(comment.created_at)}</Item>
              </Stack>
              <Box key={index} sx={{ padding: "0px 20px" }}>
                <Markdown comment={comment} />
              </Box>
              <ReplyComment responseTo={comment.commentId} />
              <Divider variant="middle" />{" "}
            </Box>
          ))}

          <Editor
            ref={editorRef} //initialValue={"내용을 입력해주세요."}
          />

          <div>
            <Button onClick={onSubmit}>저장</Button>
          </div>
        </div>
      )}
    </Stack>
  );
};

export default ReplyComment;
