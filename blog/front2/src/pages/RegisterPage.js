// 회원가입 페이지
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
