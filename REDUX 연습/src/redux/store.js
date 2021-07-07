import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// action에서 dispatch를 return해줄 수 있는 기능 사용가능
import thunk from 'redux-thunk';
// 로그 값이 찍힘
import logger from 'redux-logger';

const middleware = [logger, thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;