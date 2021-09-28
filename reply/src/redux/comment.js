import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("reply")
  ? [...JSON.parse(localStorage.getItem("reply"))]
  : [];
// 초기 상태를 localStorage에서 가져온다. 만약 'reply'가 존재하지 않으면 [] 사용
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment(state, action) {
      const { content, writer, postId, responseTo, commentId } = action.payload;
      state.push({ content, writer, postId, responseTo, commentId });
    },
  },
  // 수정 기능은 해당 댓글 검색해서 마크다운 가져온 뒤(content), toast 에디터에 initialValue로 넣어주기
});
export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
