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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
