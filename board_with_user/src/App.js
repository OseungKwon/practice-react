import React, { useState } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import { signIn } from './auth/auth';
import AuthRoute from './auth/AuthRoute';
import LogoutButton from './components/LogoutButton';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [user, setUser] = useState(null);
  // authenticated: 로그인 상태 확인
  const authenticated = user != null;
  console.log(user);
  // 로그인, 로그아웃
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  // 회원가입
  const [signUp, setSIgnUp] = useState(null);
  const signUpCompleted = ({ sign }) => setSIgnUp({ sign });
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {authenticated ? (
          <></>
        ) :
          (signUpCompleted ? <></> :
            <Link to="/register">
              <button>Register</button>
            </Link>
          )
        }
      </header>

      <hr />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/about"
            render={props => (
              <About  {...props} user={user} />
            )}
          />
          <Route
            path="/register"
            render={props => (
              <RegisterForm authenticated={authenticated} signUpCompleted={signUpCompleted} {...props} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            /*"render={props" 를 쓰는 이유
            컴포넌트에 props를 넘기기 위해 사용한다 */
            render={props => <Profile user={user} {...props} />}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
