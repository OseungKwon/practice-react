import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

// type에는 REGISTER, LOGIN 들어감
// request에는 authAPI.register, authAPI.login 들어감
export default function createRequestSaga(type, request) {
  // request: 요청
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 제너레이터 함수 사용
  return function* (action) {
    // 파라미터로 action을 받아 오면 action의 정보를 조회할 수 있음
    // put=> 특정 액션을 디스패치해줌
    yield put(startLoading(type)); // 로딩 시작
    try {
      // call은 Promise를 반환하는 함수를 호출하고, 기다릴 수 있음
      // request(action.payload)와 같은 의미
      const response = yield call(request, action.payload); // response: 응답
      // 파라미터로 전달한 객체를 payload로 설정
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
