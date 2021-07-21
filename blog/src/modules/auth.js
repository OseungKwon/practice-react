import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
// takeLatest: 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 처리하는 함수(ex 더블클릭)
// takeEvery: 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리)
import createRequestSaga, {
    createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 회원가입, [성공], [실패]
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
);

// 로그인, [성공], [실패]
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN'
);

//onChange 이벤트 담당
export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // register , login
        key, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);
// 회원가입, 로그인 시, 컴포넌트가 처음 렌더링될 때 form을 초기화한다.
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login

// 회원가입, 로그인
export const register = createAction(REGISTER, ({ username, password }) => ({
    username,
    password
}));
export const login = createAction(LOGIN, ({ username, password }) => ({
    username,
    password
}));


// saga 생성
// *as authAPI 이므로 authAPI.register는 api>auth.js에 있는 register를 불러온 것이다.
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
// "REGISTER"라는 액션에 대해서 디스패치된 가장 마지막에 액션만을 처리
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

// 초기 상태
const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: ''
    },
    login: {
        username: '',
        password: ''
    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value; // 예: state.register.username을 바꾼다
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null // 폼 전환 시 회원 인증 에러 초기화
        }),

        /* <회원가입> */
        // 회원가입 성공
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 회원가입 실패
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),

        /* <로그인> */
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        })
    },
    initialState //초기 상태
);
// 리듀서 이름은 auth!
export default auth;