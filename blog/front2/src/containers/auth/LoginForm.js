import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  // 액션 함수 할당
  const dispatch = useDispatch();
  // redux에 있는 값들을 수정해주기 위해, auth 에 있는 login을 불러옴
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  // input 내부 변환된 값 저장
  const onChange = (e) => {
    // value에는 값이, name에는
    const { value, name } = e.target;
    console.log(value, name);
    // changeField 액션 실행, form, key, value를 넣어
    //draft[from][key]=value로 저장
    dispatch(
      changeField({
        form: 'login', // form에는 login,register 존재
        key: name, // key에는 username, password, passwordCofirm 존재
        // value는 하위 컴포넌트에서 받아오기 때문에 지정 필요 x
        value, // ex) form.username, form.password
      }),
    );
  };
  // 로그인 버튼 누를 시 실행되는 이벤트
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(login({ username, password }));
  };
  // 컴포넌트가 처음 렌더링 될 때, from을 초기화하는 useEffect
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
