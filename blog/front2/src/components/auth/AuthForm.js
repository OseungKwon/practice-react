// 회원가입, 로그인 Form
// 조금 더 세세하게 css 다룸
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
// WhiteBox 바로 안에 있게되는 AuthFormBolck
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 2rem;
  }
`;
// input태그 모두
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  outline: none;
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;
// Link로 회원가입이면->로그인으로 넘어갈 수 있음
const Footer = styled.div`
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: black;
    }
  }
`;
// 제출하는 버튼
const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

// 능동적으로 컴포넌트 관리 위해, props로 type를 받아
// 로그인, 회원가입을 하나의 Form으로 만든다.
const textMap = {
  login: '로그인',
  register: '회원가입',
};
const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'register' ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/register">회원가입</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
