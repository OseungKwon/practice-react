import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment(state, action) {
            const { content, writer, postId } = action.payload
            state.push({ content, writer, postId })
        }
    }
})
export const { addComment } = commentSlice.actions
export default commentSlice.reducer