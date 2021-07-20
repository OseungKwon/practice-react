import React from 'react';
import { Router } from 'react-router-dom';

import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'

const App = () => {
  return (
    <div>
      <Router component={PostListPage} path={['/@:username', '/']} exact />
      <Router component={LoginPage} path='/login' />
      <Router component={RegisterPage} path='/register' />
      <Router component={WritePage} path='/write' />
      <Router component={PostPage} path='/@:username/:postId' />
    </div>
  )
}

export default App
