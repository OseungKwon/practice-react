import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTyles,
} from "../lib/createRequestSaga";
import * as postAPI from '../lib/api/posts'
import { takeLatest } from "redux-saga/effects";