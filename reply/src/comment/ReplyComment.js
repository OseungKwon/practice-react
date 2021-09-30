import React, { useState, useEffect, useRef } from "react";
import { Stack, Button, Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import uuid from "react-uuid";

import { useSelector, useDispatch } from "react-redux";
import { addComment, editComment } from "../redux/comment";
import Markdown from "../component/Markdown";
import { Editor } from "@toast-ui/react-editor";

import { check_kor, timeForToday } from "../component/CommentTool";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "#737373",
  fontSize: "1rem",
  lineHeight: "1rem",
}));

const ProfileIcon = styled(Avatar)(() => ({
  backgroundColor: "orangered",
  width: "2rem",
  height: "2rem",
}));

const ReplyComment = ({ responseTo, user }) => {
  const [local, setLocal] = useState([]);
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);

  // mock user
  const editorRef = useRef();

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    const date = new Date();

    let data = {
      content: getContent,
      writer: user,
      postId: "123123",
      responseTo: responseTo,
      commentId: uuid(),
      created_at: `${date}`,
    };
    dispatch(addComment(data));
  };

  // Edit comment
  const onEdit = (commentId) => {
    console.log(commentId);
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    console.log(getContent);

    let data = { commentId: commentId, content: getContent };
    dispatch(editComment(data));
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
              {/* writer 정보, 작성 시간 */}
              <Stack direction="row" spacing={2}>
                <ProfileIcon>
                  {check_kor.test(comment.writer)
                    ? comment.writer.slice(0, 1)
                    : comment.writer.slice(0, 2)}
                </ProfileIcon>
                <Item>{comment.writer}</Item>

                <Item>{timeForToday(comment.created_at)}</Item>
              </Stack>
              {/* 작성 content */}
              <Box key={index} sx={{ padding: "0px 20px" }}>
                <Markdown comment={comment} />
              </Box>
              {/* comment 수정 */}
              {user === comment.writer && (
                <>
                  {openEditor === comment.commentId && (
                    <Editor initialValue={comment.content} ref={editorRef} />
                  )}
                  <Button
                    onClick={() => {
                      if (comment.commentId === openEditor) {
                        onEdit(comment.commentId);
                        setOpenEditor("");
                      } else {
                        setOpenEditor(comment.commentId);
                      }
                    }}
                  >
                    수정
                  </Button>
                </>
              )}
              {/* 대댓글 컴포넌트 */}
              <ReplyComment responseTo={comment.commentId} user={user} />
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
