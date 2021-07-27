import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTyles,
} from "../lib/createRequestSaga";
import * as postAPI from '../lib/api/posts'
import { takeLatest } from "redux-saga/effects";

const [
    LIST_POSTS,
    LIST_POSTS_SUCCESS,
    LIST_POSTS_FAILURE,
] = createRequestActionTyles('posts/LIST_POSTS');

export const listPosts = createAction(
    LIST_POSTS,
    ({ tag, username, page }) => ({ tag, username, page }),
)

const listPostsSaga = createRequestSaga(LIST_POSTS, postAPI.listPosts);
export function* postSaga() {
    yield takeLatest(LIST_POSTS, listPostsSaga)
}
