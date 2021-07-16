import produce from 'immer';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILUREN = 'auth/LOGIN_LOGIN_FAILURE';


export const changeField = ({ form, key, value }) => ({
    type: CHANGE_FIELD,
    form, key, value
})
export const initializeForm = (form) => ({
    type: INITIALIZE_FORM,
    form
})

export const register = ({ username, password }) => ({
    type: REGISTER,
    username, password
})
export const login = ({ username, password }) => ({
    type: LOGIN,
    username, password
})

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

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
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return produce(state, draft => {
                draft[action.form][action.key] = action.value;
            })

        case INITIALIZE_FORM:
            return {
                ...state,
                [action.form]: initialState[action.form],
                authError: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                authError: null,
                auth
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                authError: action.error,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
                auth
            }
        case LOGIN_FAILUREN:
            return {
                ...state,
                authError: action.error,
            }
        default:
            return state
    }
}
export default auth;