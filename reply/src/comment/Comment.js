import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addComment } from "../redux/comment";
import ReplyComment from "./ReplyComment";
// dot icon
//import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Stack, Button, Avatar, Divider, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

// markdown, toast editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import Markdown from "../component/Markdown";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "#737373",
  fontSize: "1rem",
  lineHeight: "1rem",
}));

const Comment = () => {
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const [display, setDisplay] = useState(false);
  const editorRef = useRef();

  // mock user
  const [user, setUser] = useState("jamong");

  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);
    const date = new Date();

    // 데이터 저장
    // setCommentValule(text);
    let data = {
      content: getContent,
      writer: user,
      postId: "123123",
      responseTo: "root",
      commentId: uuid(),
      created_at: `${date}`,
    };
    dispatch(addComment(data));
  };

  // 프로필 아이콘 글자 한글일때 구분
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  // time
  function timeForToday(time) {
    const now = new Date();
    const created_at = new Date(time);

    const minute = Math.floor(
      (now.getTime() - created_at.getTime()) / 1000 / 60
    );
    if (minute < 1) return "방금전";
    if (minute < 60) {
      return `${minute}분전`;
    }

    const hour = Math.floor(minute / 60);
    if (hour < 24) {
      return `${hour}시간전`;
    }

    const day = Math.floor(minute / 60 / 24);
    if (day < 365) {
      return `${day}일전`;
    }

    return `${Math.floor(day / 365)}년전`;
  }

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [comments]);

  return (
    <Paper sx={{ m: 15, p: 3 }}>
      {/* mock user selector */}
      <div>{user}</div>
      <div>
        <Button onClick={changeUser} value="jamong">
          jamong
        </Button>
        <Button onClick={changeUser} value="자몽">
          자몽
        </Button>
        <Button onClick={changeUser} value="유저1">
          유저1
        </Button>
        <Button onClick={changeUser} value="유저2222222">
          유저2222222
        </Button>
      </div>
      {/* mock user selector end */}

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
            <Button onClick={onSubmit}>저장</Button>
          </div>
        </>
      )}

      {local.map((comment, index) => (
        <Box sx={{ m: 2 }} key={comment.commentId}>
          {/* writer 정보, 작성 시간 */}
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ bgcolor: "orangered", width: "2rem", height: "2rem" }}
            >
              {check_kor.test(comment.writer)
                ? comment.writer.slice(0, 1)
                : comment.writer.slice(0, 2)}
            </Avatar>
            <Item>{comment.writer}</Item>

            <Item>{timeForToday(comment.created_at)}</Item>
          </Stack>

          {/* 작성 content */}
          <Box key={index} sx={{ padding: "0px 20px" }}>
            <Markdown comment={comment} />
          </Box>

          {/* 대댓글 컴포넌트 */}
          <ReplyComment responseTo={comment.commentId} />

          <Divider variant="middle" />
        </Box>
      ))}
    </Paper>
  );
};

export default Comment;
