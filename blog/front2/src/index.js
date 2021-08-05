import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 라우터 관련 import
import { BrowserRouter } from 'react-router-dom';
//  리덕스 스토어 관련 import
import { Provider } from 'react-redux'; // Provider 는 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트
import { createStore, applyMiddleware } from 'redux'; // 스토어 생성
import { composeWithDevTools } from 'redux-devtools-extension'; // redux 구조를 볼 수 있는 extension-devtools
import rootReducer, { rootSaga } from './modules'; // redux들을 한곳에 뭉쳐놓은 곳
import createSagaMiddleware from 'redux-saga';
import { tempSetUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try {
    // 로컬 스토리지에 있는 user 정보 가져오기
    const user = localStorage.getItem('user');
    if (!user) return;
    // 새로고침 이후, 로그인  유지되도록 액션 발생
    store.dispatch(tempSetUser(JSON.parse(user)));
    // cehck 액션 디스패치 =>
    //실패-> 사용자 상태 초기화 및 localStorage 값 지워줌,
    // 성공-> 그대로 진행
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
