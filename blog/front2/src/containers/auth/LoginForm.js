import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  // 액션 함수 할당
  const dispatch = useDispatch();
  // redux에 있는 값들을 수정해주기 위해, auth 에 있는 login을 불러옴
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
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
  };
  // 컴포넌트가 처음 렌더링 될 때, from을 초기화하는 useEffect
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
