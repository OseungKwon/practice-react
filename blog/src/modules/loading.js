import { createAction, handleActions } from 'redux-actions';
// loading 액션들은 createRequestSaga에서 디스패치된다.
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 로딩 시작
export const startLoading = createAction(
    START_LOADING,
    requestType => requestType,
);
// 로딩 끝
export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType
)

// 초기 상태: 없음
const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.paylaod]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.paylaod]: false,
        })
    },
    initialState
);
export default loading;