// 회원가입 페이지
import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
