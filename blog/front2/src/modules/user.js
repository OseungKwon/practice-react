// 사용자 상태
import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

// 새로고침 이후 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHEKC_FAILURE] =
  createRequestActionTypes('user/CHECK');

// 로그아웃
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

//  check === client.get('/api/auth/check');
// 서버에서 check에 저장된 정보를 가져온다.
const checkSaga = createRequestSaga(CHECK, authAPI.check);
// + 응답이 중요하기에 따로 createRequestSaga를 만들어 작업을 처리해 주었다.

// 로컬 스토리지에서 오류 발생시,
function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

//  로그아웃 사가
function* logoutSaga() {
  try {
    // call 을 사용하면 특정 함수를 호출하고,
    // 결과물이 반환 될 때까지 기다려줄 수 있다.
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

// user에서 사용되는 사가들은 모두 여기에 넣어져 사용된다.
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHEKC_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
const init = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),

    // 회원 정보가 존재하면,
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),

    // 회원 정보가 존재하지 않으면 에러 반환
    [CHEKC_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({ ...state, user: null }),
  },
  init,
);
