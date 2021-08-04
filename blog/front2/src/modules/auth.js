// 회원 인증 Form  Redux
import { createAction, handleActions } from 'redux-actions';
// immer
import produce from 'immer';
// redux-saga 관련
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
// 모든 rest api 가져오기
import * as authAPI from '../lib/api/auth';

// 회원인증 onChange, onSubmit 관련
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 회원가입 관련 saga
// 비구조화 할당 통해서 createRequestActionTyle에서의
// [type, SUCCESS, FAILURE]을 [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE]로
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER');

// 로그인 관련 saga
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

// onChange
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
// Form 초기 상태
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

// 회원가입
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));

//  로그인
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// [회원가입 사가]
// register === client.post('/api/auth/register', { username, password });
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

// [로그인 사가]
// login === client.post('/api/auth/login', { username, password });
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

// redux-saga는 "제너레이터 함수"를 사용해 비동기 작업을 관리
export function* authSaga() {
  // 기존에 진행중이던 작업이 있다면 취소,
  // 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

// 초기화
const init = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: init[form],
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  init, // state에 딱히 값이 없으면 init이 대신 들어감
);
export default auth;
