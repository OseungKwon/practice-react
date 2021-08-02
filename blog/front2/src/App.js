import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <div>
      {/*  @을 통해 @:username에 유저의 이름이 들어가면 파라미터로 읽을 수 있다.*/}
      {/*  PostListPage Route는 경로를 배열로 설정해 여러 경로를 넣어주었다.*/}
      <Route component={PostListPage} path={['/@:username', '/']} exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
      <Route component={WritePage} path="/write"/>
      <Route component={PostPage} path='/@:username/:postId' exact/>
    </div>
  )
}

export default App
