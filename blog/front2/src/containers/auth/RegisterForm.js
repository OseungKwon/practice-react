import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 입력 업데이트 관련 이벤트
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  //  Form 제출 이벤트
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, password].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    dispatch(register({ username, password }));
    // history.push('/'); 아래에서 왜 실행이 안되지
  };

  // 컴포넌트가 처음 렌더링 될 때, from을 초기화하는 useEffect
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
    // 회원 가입이 정상적으로 처리된 경우,
    if (auth) {
      console.log(`회원가입 성공`);
      console.log(auth);
      // check에서 회원 정보 가져옴
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  // user값이 잘 설정되어 있으면,
  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
      history.push('/'); // 홈 화면으로 이동
      // /login으로 바꿨을 때, 계속해서 홈 화면으로 이동했는데,
      // 이는 user에 이미 정보가 등록되어 있어서 그런 것 같다.
    }
  }, [history, user, auth]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
