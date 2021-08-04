// 로딩 상태
import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING'; // 로딩 시작
const FINISH_LOADING = 'loading/FINISH_LOADING'; // 로딩 끝

// 로딩 시작
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType, // requestType에 뭐가 들어가는지
);

// 로딩 끝
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);
const init = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  init,
);
export default loading;
