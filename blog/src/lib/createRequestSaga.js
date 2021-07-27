import { call, put } from 'redux-saga/effects';
// put: 새로운 액션을 디스패치
// call: 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다림

import { startLoading, finishLoading } from '../modules/loading';

// 쓸데없이 너무 많은 액션들을 일일히 지정해줘야 하기에 변수로 바꿈
// type에는 'login', 'register'가 들어감
export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};
// 쓸데없이 너무 많은 액션들을 일일히 지정해줘야 하기에 변수로 바꿈 2
// requeset에는 ex) authAPI.request 가 들어감
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    // 비동기 작업 처리 위해
    return function* (action) {
        yield put(startLoading(type)); // 로딩 시작
        // 로딩중
        try {
            const response = yield call(request, action.payload); //특정 함수 호출 후, 결과를 받는다.
            // 연결이 성공적으로 이루어졌으면, 2개의 액션을 디스패치한다.
            yield put({
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
}